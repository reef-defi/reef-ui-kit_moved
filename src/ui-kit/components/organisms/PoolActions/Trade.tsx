import { useState, useRef, useMemo } from "react"
import { Data, CustomFunction, TokenKey } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import Token from "./Token"
import { formatAmount, maxDecimals } from "../../../utils/format"
import { BigNumber } from "bignumber.js"
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { setInputValue, getOtherTokenKey } from "./helpers"
import Icon from "../../atoms/Icon"

export interface Props {
  data: Data,
  onInput?: CustomFunction,
  onConfirm?: CustomFunction
}

const SummaryItem = ({
  label,
  value,
  empty,
  className
}: {
  label: string,
  value?: string,
  empty?: boolean,
  className?: string
}): JSX.Element => (
  <div
    className={`
      uik-pool-actions__summary-item
      ${empty ? 'uik-pool-actions__summary-item--empty': ''}
      ${className || ''}
    `}
  >
    <div className="uik-pool-actions__summary-item-label">{ label }</div>
    <div className="uik-pool-actions__summary-item-value">{ value }</div>
  </div>
)

const Provide = ({
  data,
  onInput,
  onConfirm
}: Props): JSX.Element => {
  const [values, setValues] = useState({
    percentage: 0,
    firstToken: 0,
    secondToken: 0
  })

  const hasValue = useMemo(() => {
    return !!values.firstToken &&
      !!values.secondToken &&
      !!values.percentage
  }, [
    values.firstToken,
    values.secondToken,
    values.percentage
  ])

  const [fromTokenKey, setFromTokenKey] = useState<TokenKey>("firstToken")

  const toTokenKey = useMemo((): TokenKey => {
    if (fromTokenKey === "firstToken") return "secondToken"
    return "firstToken"
  }, [
    fromTokenKey,
    data.firstToken,
    data.secondToken
  ])

  const switchTokens = () => { 
    setFromTokenKey(toTokenKey)
    setValue({ percentage: 0 })
  }

  const firstTokenInput = useRef(null)
  const secondTokenInput = useRef(null)

  const tokenInputs = {
    firstToken: firstTokenInput,
    secondToken: secondTokenInput
  }

  const getRates = useMemo(() => {
    const getRatio = (tokenKey: TokenKey) => {
      const _token = data[tokenKey]
      const otherTokenKey = getOtherTokenKey(tokenKey)
      const token = data[otherTokenKey]
      
      let amount = new BigNumber(_token.price).dividedBy(token.price).toNumber()
      amount = maxDecimals(amount, 4)

      const text = `1 ${_token.symbol} = ${amount ? formatAmount(amount) : '0.0'} ${token.symbol}`

      return { amount, text, _token, token }
    }

    const from = getRatio(fromTokenKey)
    const to = getRatio(toTokenKey)

    return { from, to }
  }, [
    fromTokenKey,
    toTokenKey,
    data[fromTokenKey],
    data[toTokenKey]
  ])

  const getFee = useMemo(() => {
    const token = data[fromTokenKey]

    const percentage = hasValue ? 0.3 : 0

    let amount = new BigNumber(values[fromTokenKey]).times(new BigNumber(percentage).dividedBy(100).toNumber()).toNumber()
    amount = maxDecimals(amount, 4)
    
    let value = new BigNumber(amount).times(token.price).toNumber()
    value = maxDecimals(value, 2)

    const text = `$${value ? formatAmount(value) : "0.0"} (${amount ? formatAmount(amount).replaceAll(",", " ") : '0'} ${token.symbol})`

    return { percentage, amount, value, token, text}
  }, [
    fromTokenKey,
    hasValue,
    values[fromTokenKey]
  ])

  const getSlippage = useMemo(() => {
    const percentage = hasValue ? 2.5 : 0
    const warn = percentage > 5
    
    return { percentage, warn }
  }, [
    values
  ])

  const maxValues = useMemo(() => {
    const output = {
      firstToken: data.firstToken.available,
      secondToken: data.secondToken.available
    }
    
    const getFullValue = (token: TokenKey) => new BigNumber(data[token].available).times(data[token].price).toNumber()

    output[toTokenKey] = new BigNumber(getFullValue(fromTokenKey)).dividedBy(data[toTokenKey].price).toNumber()
    
    return output
  }, [
    data.firstToken.available,
    data.secondToken.available,
    fromTokenKey,
    toTokenKey
  ])

  const setValue = ({
    percentage,
    tokenKey,
    value
  }: {
    percentage: number,
    tokenKey?: TokenKey,
    value?: number
  }) => {
    
    const tokenValues: {
      firstToken: number,
      secondToken: number
    } = {
      firstToken: 0,
      secondToken: 0
    }
  
    const calcTokenValue = (key: TokenKey) => {
      const tokenValue = new BigNumber(percentage).times(maxValues[key]).dividedBy(100).toNumber()
      return maxDecimals(tokenValue, 4)
    }

    if (value && tokenKey) {
      tokenValues[tokenKey] = value
      const otherTokenKey = getOtherTokenKey(tokenKey)
      tokenValues[otherTokenKey] = calcTokenValue(otherTokenKey)
    } else {
      tokenValues.firstToken = calcTokenValue("firstToken")
      tokenValues.secondToken = calcTokenValue("secondToken")
    }
  
    setInputValue(firstTokenInput, tokenValues.firstToken)
    setInputValue(secondTokenInput, tokenValues.secondToken)
  
    const newValues = {
      percentage,
      firstToken: tokenValues.firstToken,
      secondToken: tokenValues.secondToken
    }

    setValues(newValues)
    return newValues
  }

  const getOutput = (value = values) => {
    return {
      from: {
        token: data[fromTokenKey],
        amount: value[fromTokenKey]
      },
      to: {
        token: data[toTokenKey],
        amount: value[toTokenKey]
      },
      percentage: value.percentage,
      rates: getRates,
      fee: getFee,
      slippage: getSlippage
    }
  }

  const handleInput = (
    tokenKey: TokenKey,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const token = data[tokenKey]
    const max = maxValues[tokenKey] || 0

    let value = new BigNumber(event.target.value.replace(/[^0-9.]+/gi, "")).toNumber()
    value = maxDecimals(value, 4, "floor")

    if (isNaN(value) || value < 0) value = 0
    if (value > max) value = max

    const percentage = new BigNumber(value).times(100).dividedBy(max).toNumber()

    const newValues = setValue({
      percentage,
      tokenKey,
      value
    })

    if (onInput) onInput({
      token,
      value: getOutput(newValues),
      event
    })
  }

  const handleSlide = (percentage: number) => {
    const newValues = setValue({ percentage })
    if (onInput) onInput({
      token: undefined,
      value: getOutput(newValues),
      event: "slide"
    })
  }

  const confirm = () => {
    if (onConfirm) onConfirm(getOutput())
  }

  return (
    <>
      <div className="uik-pool-actions__tokens">
        <Token
          name={data[fromTokenKey].name}
          symbol={data[fromTokenKey].symbol}
          image={data[fromTokenKey].image}
          value={values[fromTokenKey]}
          price={data[fromTokenKey].price}
          max={data[fromTokenKey].available}
          onInput={e => handleInput(fromTokenKey, e)}
          onBlur={() => setInputValue(tokenInputs[fromTokenKey], values[fromTokenKey])}
          inputRef={tokenInputs[fromTokenKey]}
        />

        <div className="uik-pool-actions__token-switch">
          <button
            type="button"
            className={`
              uik-pool-actions__token-switch-btn
              ${fromTokenKey === 'secondToken' ? 'uik-pool-actions__token-switch-btn--reversed' : ''}
            `}
            onClick={switchTokens}
          >
            <Icon icon={faRepeat}/>
          </button>
        </div>

        <Token
          name={data[toTokenKey].name}
          symbol={data[toTokenKey].symbol}
          image={data[toTokenKey].image}
          onInput={e => handleInput(toTokenKey, e)}
          onBlur={() => setInputValue(tokenInputs[toTokenKey], values[toTokenKey])}
          inputRef={tokenInputs[toTokenKey]}
        />
      </div>

      <div className="uik-pool-actions__summary uik-pool-actions__trade-summary">
        <SummaryItem
          label="Rate"
          value={getRates.from.text}
          empty={!hasValue}
        />
        <SummaryItem
          label="Fee"
          value={getFee.percentage ? `${getFee.percentage}%` : '0%'}
          empty={!getFee.percentage}
        />
        <SummaryItem
          label="Slippage"
          className={getSlippage.warn ? 'uik-pool-actions__trade-slippage--warn' : ''}
          value={`${getSlippage.percentage}%`}
          empty={!getSlippage.percentage}
        />
      </div>

      <div className="uik-pool-actions__slider">
        <Slider
          value={values.percentage}
          onChange={handleSlide}
          tooltip={`${maxDecimals(values.percentage, 2)}%`}
          helpers={[
            { position: 0, text: "0%" },
            { position: 25 },
            { position: 50, text: "50%" },
            { position: 75, },
            { position: 100, text: "100%" },
          ]}
        />
      </div>

      <Button
        className="uik-pool-actions__cta"
        fill
        icon={faRepeat}
        text="Trade"
        size="large"
        disabled={!hasValue}
        onClick={confirm}
      />
    </>
  )
}

export default Provide