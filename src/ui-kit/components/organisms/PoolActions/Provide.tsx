import { useState, useRef, useMemo } from "react"
import { Data, CustomFunction, TokenKey } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import Token from "./Token"
import { formatAmount, maxDecimals } from "../../../utils/format"
import { BigNumber } from "bignumber.js"
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { setInputValue, getOtherTokenKey } from "./helpers"

export interface Props {
  data: Data,
  onInput?: CustomFunction,
  onConfirm?: CustomFunction
}

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

  const firstTokenInput = useRef(null)
  const secondTokenInput = useRef(null)

  const maxValues = useMemo(() => {
    const output = {
      firstToken: data.firstToken.available,
      secondToken: data.secondToken.available
    }
    
    const getFullValue = (token: TokenKey) => new BigNumber(data[token].available).times(data[token].price).toNumber()
    const firstTokenValue = getFullValue("firstToken")
    const secondTokenValue = getFullValue("secondToken")

    if (firstTokenValue !== secondTokenValue) {
      const higherValueToken = firstTokenValue > secondTokenValue ? "firstToken" : "secondToken"
      const lowerValue = firstTokenValue < secondTokenValue ? firstTokenValue : secondTokenValue
      const adjustedValue = new BigNumber(lowerValue).dividedBy(data[higherValueToken].price).toNumber()
      output[higherValueToken] = adjustedValue
    }
    
    return output
  }, [
    data.firstToken.available,
    data.firstToken.price,
    data.secondToken.available,
    data.secondToken.price
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
      firstToken: {
        data: data.firstToken,
        amount: value.firstToken
      },
      secondToken: {
        data: data.secondToken,
        amount: value.secondToken
      },
      percentage: value.percentage,
      value: getTotalValue
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

  const getTotalValue = useMemo((): number => {
    const firstTokenValue = new BigNumber(values.firstToken).times(data.firstToken.price).toNumber()
    const secondTokenValue = new BigNumber(values.secondToken).times(data.secondToken.price).toNumber()
    const sum = firstTokenValue + secondTokenValue
    return maxDecimals(sum, 2)
  }, [
    values.firstToken,
    values.secondToken,
    data.firstToken.price,
    data.secondToken.price
  ])

  return (
    <>
      <div className="uik-pool-actions__tokens">
        <Token
          name={data.firstToken.name}
          symbol={data.firstToken.symbol}
          image={data.firstToken.image}
          max={data.firstToken.available}
          onInput={e => handleInput('firstToken', e)}
          onBlur={e => setInputValue(firstTokenInput, values.firstToken)}
          inputRef={firstTokenInput}
        />
        <Token
          name={data.secondToken.name}
          symbol={data.secondToken.symbol}
          image={data.secondToken.image}
          max={data.secondToken.available}
          onInput={e => handleInput('secondToken', e)}
          onBlur={e => setInputValue(secondTokenInput, values.secondToken)}
          inputRef={secondTokenInput}
        />
      </div>

      <div className="uik-pool-actions__summary">
        <div
          className={`
            uik-pool-actions__summary-item
            ${!getTotalValue ? 'uik-pool-actions__summary-item--empty' : ''}
          `}
        >
          <div className="uik-pool-actions__summary-item-label">Total</div>
          <div className="uik-pool-actions__summary-item-value">${ getTotalValue ? formatAmount(getTotalValue) : '0.0' }</div>
        </div>
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
        icon={faCoins}
        text="Provide"
        size="large"
        disabled={
          !values.firstToken ||
          !values.secondToken ||
          !values.percentage
        }
        onClick={confirm}
      />
    </>
  )
}

export default Provide