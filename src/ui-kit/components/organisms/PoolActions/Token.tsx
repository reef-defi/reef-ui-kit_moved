import { useState, useMemo } from "react"
import { Token, CustomFunction } from "./PoolActions"
import { formatAmount, maxDecimals } from "../../../utils/format"
import BigNumber from "bignumber.js"

export interface Props extends Token {
  value?: number,
  price?: number,
  max?: number,
  inputRef?: any,
  onInput?: CustomFunction,
  onBlur?: CustomFunction
}

const TokenComponent = ({
  image,
  symbol,
  value,
  price,
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

  const getPrice = useMemo((): number => {
    return maxDecimals(new BigNumber(value || 0).times(price || 0).toNumber(), 2)
  }, [value, price])

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
          {
            !!max &&
            <div className="uik-pool-actions-token__amount">Available { !!max ? formatAmount(max) : '' }</div>
          }
        </div>
      </div>
  
      <div className="uik-pool-actions-token__value">
        {
          !!price &&
          <div
            className={`
              uik-pool-actions-token__price
              ${!getPrice ? 'uik-pool-actions-token__price--empty': ''}
            `}
          >${ getPrice ? formatAmount(getPrice) : '0.0' }</div>
        }

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