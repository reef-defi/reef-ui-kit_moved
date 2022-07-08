import { formatAmount } from "../../../utils/format"
import { BigNumber } from "bignumber.js"
import { TokenKey } from "./PoolActions"

/**
 * Sets value in input element
 */
export const setInputValue = (ref, value: number) => {
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

export const getOtherTokenKey = (key: TokenKey): TokenKey => {
  return key === "firstToken" ? "secondToken" : "firstToken"
}