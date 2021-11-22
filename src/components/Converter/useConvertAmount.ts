import type { Entry } from "../../types"

const parse = (amount: string): number => {
  const sanitizedAmount = amount.replace(",", ".").replace(/\s+/g, "")
  return parseFloat(sanitizedAmount)
}

const validate = (amount: number): boolean => {
  return amount.toString().length > 0 && !isNaN(amount)
}

const useConvertAmount = (amount: string, targetCurrency?: Entry): number | null => {
  if (!targetCurrency) {
    return null
  }
  const parsedAmount = parse(amount)
  if (!validate(parsedAmount)) {
    return null
  }
  return parsedAmount / targetCurrency.rate
}

export default useConvertAmount
