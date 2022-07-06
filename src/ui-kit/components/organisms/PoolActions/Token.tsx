import { useState } from "react"
import { Token, CustomFunction } from "./PoolActions"
import { formatAmount } from "../../../utils/format"

export interface Props extends Token {
  max?: number,
  inputRef?: any,
  onInput?: CustomFunction,
  onBlur?: CustomFunction
}

const TokenComponent = ({
  image,
  symbol,
  max,
  onInput,
  onBlur,
  inputRef
}: Props): JSX.Element => {
  const [ isFocused, setFocused ] = useState(false)

  const onInputFocus = () => setFocused(true)

  const onInputBlur = e => {
    setFocused(false)
    if (onBlur) onBlur(e)
  }

  return (
    <div
      className={`
        uik-pool-actions-token
        ${isFocused ? 'uik-pool-actions-token--focused': isFocused}
      `}
    >
  
      <div className="uik-pool-actions-token__token">
        <div
          className="uik-pool-actions-token__image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
  
        <div className="uik-pool-actions-token__info">
          <div className="uik-pool-actions-token__symbol">{ symbol }</div>
          <div className="uik-pool-actions-token__amount">Available { !!max ? formatAmount(max) : '' }</div>
        </div>
      </div>
  
      <div className="uik-pool-actions-token__value">
        <input
          ref={inputRef}
          onInput={onInput}
          onBlur={onInputBlur}
          onFocus={onInputFocus}
          size={1}
          placeholder="0.0"
        />
      </div>
    </div>
  )
}

export default TokenComponent