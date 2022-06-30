import { useState } from "react"
import { Token, CustomFunction } from "./PoolActions"
import { formatAmount } from "../../../utils/format"

export interface Props extends Token {
  max?: number,
  inputRef?: any,
  onInput?: CustomFunction,
  onBlur?: CustomFunction
}

const ManageToken = ({
  name,
  image,
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
        uik-pool-actions-manage-token
        ${isFocused ? 'uik-pool-actions-manage-token--focused': isFocused}
      `}
    >
  
      <div className="uik-pool-actions-manage-token__token">
        <div
          className="uik-pool-actions-manage-token__image"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
  
        <div className="uik-pool-actions-manage-token__info">
          <div className="uik-pool-actions-manage-token__name">{ name }</div>
          <div className="uik-pool-actions-manage-token__amount">Max: { !!max ? formatAmount(max) : '' }</div>
        </div>
  
      </div>
  
      <div className="uik-pool-actions-manage-token__value">
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

export default ManageToken