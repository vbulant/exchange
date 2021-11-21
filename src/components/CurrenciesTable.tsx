import { formatNumber } from "../utils"
import type { Labels, Entry } from "../types"

type Props = {
  headers: Labels
  entries: Entry[]
  setTargetCurrencyCode: (currencyCode: string) => void
}

const CurrenciesTable = ({ headers, entries, setTargetCurrencyCode }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Měna</th>
          <th>Kurz</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.currencyCode}>
            <th>
              <button type="button" onClick={() => setTargetCurrencyCode(entry.currencyCode)}>
                {entry.country} – {entry.currency} ({entry.currencyCode})
              </button>
            </th>
            <td>{formatNumber(entry.rate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CurrenciesTable
