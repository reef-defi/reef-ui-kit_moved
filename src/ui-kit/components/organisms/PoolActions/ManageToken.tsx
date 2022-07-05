import { useState, useMemo } from "react"
import { Token, CustomFunction } from "./PoolActions"
import { formatAmount } from "../../../utils/format"
import BigNumber from "bignumber.js"
import Uik from "../../../../ui-kit"

export interface Props extends Token {
  max?: number,
  price: number,
  value: number,
  inputRef?: any,
  onInput?: CustomFunction,
  onBlur?: CustomFunction
}

const ManageToken = ({
  image,
  symbol,
  price,
  value,
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

  const getPrice = useMemo(() => {
    return Uik.utils.maxDecimals(new BigNumber(price).times(value).toNumber(), 4) || 0
  }, [price, value])

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
          <div className="uik-pool-actions-manage-token__symbol">{ symbol }</div>
          <div className="uik-pool-actions-manage-token__amount">Available { !!max ? formatAmount(max) : '' }</div>
        </div>
      </div>
  
      <div className="uik-pool-actions-manage-token__value">
        <div
          className={`
            uik-pool-actions-manage-token__price
            ${!getPrice ? 'uik-pool-actions-manage-token__price--empty' : ''}
          `}
        >~${ getPrice ? formatAmount(getPrice) : '0' }</div>

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