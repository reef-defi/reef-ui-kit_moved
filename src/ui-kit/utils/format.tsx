import { BigNumber } from "bignumber.js"

export const formatAddress = (address:string = "", offset:number = 5): string => {  
  if (address.length > offset) {
    return `${address.slice(0, offset )}...${address.slice(address.length - offset)}`
  }

  return address
}

export const formatAmount = (amount: number | string): string => {
  if (!amount) return ""
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const formatHumanAmount = (amount: number | string, decPlaces: number = 2): string => {
  if (typeof amount === "string") {
    amount = amount.replaceAll(",", "")
    amount = new BigNumber(amount).toNumber()
  }

  if (isNaN(amount)) return String(amount)

  decPlaces = Math.pow(10, decPlaces)
  const abbrev = ["k", "M", "B"]

  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3)

    if(size <= amount) {
      amount = Math.round(amount * decPlaces / size) / decPlaces

      if(amount === 1000 && (i < abbrev.length - 1)) {
        amount = 1
        i++
      }

      amount = `${amount} ${abbrev[i]}`
      break
    }
  }

  return String(amount)
}



