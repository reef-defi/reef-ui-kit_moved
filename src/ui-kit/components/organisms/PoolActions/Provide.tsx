import { useState, useRef } from "react"
import { Data, CustomFunction, TokenKey } from "./PoolActions"
import Button from '../../atoms/Button'
import Slider from '../../atoms/Slider'
import Token from "./Token"
import { formatAmount, maxDecimals } from "../../../utils/format"
import { BigNumber } from "bignumber.js"
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { setInputValue } from "./helpers"

export interface Props {
  data: Data,
  onInput?: CustomFunction,
  onConfirm?: CustomFunction,
  calcValues?: CustomFunction
}

const Provide = ({
  data,
  onInput,
  onConfirm,
  calcValues = () => {}
}: Props): JSX.Element => {
  const defaultValues = {
    firstToken: 0,
    secondToken: 0,
    percentage: 0,
    value: 0
  }
  const [values, setValues] = useState(defaultValues)

  const firstTokenInput = useRef(null)
  const secondTokenInput = useRef(null)

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
      value: value.value
    }
  }

  const setValue = (value) => {
    const newValues = calcValues ? calcValues(value) : defaultValues

    setInputValue(firstTokenInput, newValues.firstToken)
    setInputValue(secondTokenInput, newValues.secondToken)

    setValues(newValues)
    return newValues
  }

  const handleInput = (
    tokenKey: TokenKey,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const token = data[tokenKey]

    let value = new BigNumber(event.target.value.replace(/[^0-9.]+/gi, "")).toNumber()
    value = maxDecimals(value, 4, "floor")
    if (isNaN(value) || value < 0) value = 0

    const newValues = setValue({ [tokenKey]: value })

    if (onInput) onInput({
      token,
      data: getOutput(newValues),
      event
    })
  }

  const handleSlide = (percentage: number) => {
    const newValues = setValue({ percentage })

    if (onInput) onInput({
      token: undefined,
      data: getOutput(newValues),
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
            ${!values.value ? 'uik-pool-actions__summary-item--empty' : ''}
          `}
        >
          <div className="uik-pool-actions__summary-item-label">Total</div>
          <div className="uik-pool-actions__summary-item-value">${ values.value ? formatAmount(values.value) : '0.0' }</div>
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