import { useState, useRef } from "react"
import { Data, CustomFunction } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import ManageToken from "./ManageToken"
import { formatAmount, maxDecimals } from "../../../utils/format"
import { BigNumber } from "bignumber.js"

type MaxKey = "available" | "provided"
type TokenKey = "firstToken" | "secondToken"

/**
 * Sets value in input element
 */
const setInputValue = (ref, value: number) => {
  const el = ref.current
  if (!el) return

  let currentValue = new BigNumber(el.value).toNumber()
  if (isNaN(currentValue)) currentValue = 0
      
  if (
    document.activeElement === el &&
    currentValue === value
  ) return

  let newValue = formatAmount(value).replaceAll(",", " ")

  ref.current.value = newValue
}

const Manage = ({
  onInput,
  data,
  buttonText,
  buttonIcon,
  maxKey
}: {
  onInput?: CustomFunction,
  data: Data,
  buttonText?: string,
  buttonIcon?: any,
  maxKey: MaxKey
}): JSX.Element => {
  const [values, setValues] = useState({
    percentage: 0,
    firstToken: 0,
    secondToken: 0
  })

  const firstTokenInput = useRef(null)
  const secondTokenInput = useRef(null)

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
      return new BigNumber(percentage).times(data[key][maxKey]).dividedBy(100).toNumber()
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
  
    setValues({
      percentage,
      firstToken: tokenValues.firstToken,
      secondToken: tokenValues.secondToken
    })
  
    return values
  }

  const handleInput = (
    tokenKey: TokenKey,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const token = data[tokenKey]
    const max = token[maxKey] || 0

    let value = new BigNumber(event.target.value.replace(/[^0-9.]+/gi, "")).toNumber()
    value = maxDecimals(value, 4, "floor")

    if (isNaN(value) || value < 0) value = 0
    if (value > max) value = max

    const percentage = new BigNumber(value).times(100).dividedBy(max).toNumber()

    setValue({
      percentage,
      tokenKey,
      value
    })

    if (onInput) onInput({ token, values, event })
  }

  return (
    <>
      <div className="uik-pool-actions-manage__tokens">
        <ManageToken
          name={data.firstToken.name}
          image={data.firstToken.image}
          max={data.firstToken[maxKey]}
          onInput={e => handleInput('firstToken', e)}
          onBlur={e => setInputValue(firstTokenInput, values.firstToken)}
          inputRef={firstTokenInput}
        />
        <ManageToken
          name={data.secondToken.name}
          image={data.secondToken.image}
          max={data.secondToken[maxKey]}
          onInput={e => handleInput('secondToken', e)}
          onBlur={e => setInputValue(secondTokenInput, values.secondToken)}
          inputRef={secondTokenInput}
        />
      </div>

      <div className="uik-pool-actions-manage__fee">Fee: {'0.02 REEF'}</div>

      <div className="uik-pool-actions-manage__slider">
        <Slider
          value={values.percentage}
          onChange={percentage => setValue({ percentage })}
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
        className="uik-pool-actions-manage__cta"
        fill
        icon={buttonIcon}
        text={buttonText}
        size="large"
        disabled={
          !values.firstToken ||
          !values.secondToken ||
          !values.percentage
        }
      />
    </>
  )
}

export default Manage