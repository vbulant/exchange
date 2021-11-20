import { formatNumber } from "../utils"
import type { Labels, Entry } from "../types"

type Props = {
  headers: Labels
  entries: Entry[]
}

const CurrenciesTable = ({ headers, entries }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.currencyCode}>
            {Object.entries(entry).map(([key, value]) => (
              <td key={key}>
                {typeof value === "number" ? formatNumber(value) : value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CurrenciesTable
