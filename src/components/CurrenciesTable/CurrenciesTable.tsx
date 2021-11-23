import { useCallback } from "react"

import { formatNumber } from "../../utils"
import { Container, Header, Title, Date, Table, Thead, Tbody } from "./CurrenciesTable.styled"
import type { Labels, Entry } from "../../types"

type Props = {
  headers: Labels
  entries: Entry[]
  date: string
  isExpanded: boolean
  setTargetCurrencyCode: (currencyCode: string) => void
  onToggleClick: () => void
}

const CurrenciesTable = ({ headers, entries, setTargetCurrencyCode, date, isExpanded, onToggleClick }: Props) => {
  const handleCurrencyClick = useCallback((currencyCode: string) => {
    setTargetCurrencyCode(currencyCode)
    onToggleClick()
  }, [onToggleClick, setTargetCurrencyCode])

  return (
    <Container isExpanded={isExpanded}>
      <Header>
        <Title>Kurzovní lístek</Title>
        {/* TODO pass neutral date from api, format to locale here, add datetime attr */}
        <Date>{date}</Date>
      </Header>
      <Table>
        <Thead>
          <tr>
            <th>Měna</th>
            <th>Kurz</th>
          </tr>
        </Thead>
        <Tbody>
          {entries.map((entry) => (
            <tr key={entry.currencyCode} onClick={() => handleCurrencyClick(entry.currencyCode)}>
              <th>
                {entry.country} – {entry.currency} ({entry.currencyCode})
              </th>
              <td>{formatNumber(entry.rate)}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  )
}

export default CurrenciesTable
