import { useState, useRef, useMemo } from "react"
import { Data, CustomFunction, TokenKey } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import Token from "./Token"
import { formatAmount, maxDecimals } from "../../../utils/format"
import { BigNumber } from "bignumber.js"
import { faRepeat } from '@fortawesome/free-solid-svg-icons';
import { setInputValue } from "./helpers"

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

  const [fromTokenKey, setFromTokenKey] = useState<TokenKey>("firstToken")

  const toTokenKey = useMemo((): TokenKey => {
    if (fromTokenKey === "firstToken") return "secondToken"
    return "firstToken"
  }, [
    fromTokenKey,
    data.firstToken,
    data.secondToken
  ])

  const firstTokenInput = useRef(null)
  const secondTokenInput = useRef(null)

  const tokenInputs = {
    firstToken: firstTokenInput,
    secondToken: secondTokenInput
  }

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
    data.secondToken.available
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
      const otherTokenKey = tokenKey === "firstToken" ? "secondToken" : "firstToken"
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
      percentage: value.percentage
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
          max={data[fromTokenKey].available}
          onInput={e => handleInput(fromTokenKey, e)}
          onBlur={e => setInputValue(tokenInputs[fromTokenKey], values[fromTokenKey])}
          inputRef={tokenInputs[fromTokenKey]}
        />
        <Token
          name={data[toTokenKey].name}
          symbol={data[toTokenKey].symbol}
          image={data[toTokenKey].image}
          max={data[toTokenKey].available}
          onInput={e => handleInput(toTokenKey, e)}
          onBlur={e => setInputValue(tokenInputs[toTokenKey], values[toTokenKey])}
          inputRef={tokenInputs[toTokenKey]}
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