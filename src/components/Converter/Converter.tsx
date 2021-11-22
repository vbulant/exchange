import { useCallback, useState } from "react"

import useConvertAmount from "./useConvertAmount"
import { formatNumber } from "../../utils"
import type { Entry } from "../../types"

type Props = {
  entries: readonly Entry[]
  targetCurrencyCode: string
  setTargetCurrencyCode: (currencyCode: string) => void
}

const Converter = ({ entries, targetCurrencyCode, setTargetCurrencyCode }: Props) => {
  const getCurrency = useCallback(
    (currencyCode: string) => {
      return entries.find((entry) => entry.currencyCode === currencyCode)
    },
    [entries],
  )

  const [amount, setAmount] = useState("1")
  const targetCurrency = getCurrency(targetCurrencyCode)
  const value = useConvertAmount(amount, targetCurrency)

  return (
    <form style={{ margin: "0 0 2rem" }}>
      <input
        value={amount}
        min={1}
        onChange={(e) => setAmount(e.target.value)}
        aria-label="Množství Kč"
        // todo styled
        style={{ border: !value ? "1px solid red" : undefined }}
      />
      {" Kč"}
      {" = "}
      <span aria-label={`Hodnota v ${targetCurrencyCode}`}>{value ? formatNumber(value) : "?"}</span>
      <select
        onChange={(e) => setTargetCurrencyCode(e.target.value)}
        value={targetCurrencyCode}
        aria-label="měna"
      >
        {entries.map(({ currencyCode }) => {
          return (
            <option key={currencyCode} value={currencyCode}>
              {currencyCode}
            </option>
          )
        })}
      </select>
    </form>
  )
}

export default Converter