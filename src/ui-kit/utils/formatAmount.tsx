const formatAmount = (amount: number | string): string => {
  if (!amount) return ""
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export default formatAmount