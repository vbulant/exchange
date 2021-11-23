import { useCallback } from "react"

import { formatNumber, formatDate } from "../../utils"
import { Container, Header, Title, Date, Table, Thead, Tbody } from "./CurrenciesTable.styled"
import type { Currency } from "../../types"

type Props = {
  currencies: Currency[]
  date: string
  isExpanded: boolean
  setTargetCurrencyCode: (currencyCode: string) => void
  onToggleClick: () => void
}

const CurrenciesTable = ({
  currencies,
  setTargetCurrencyCode,
  date,
  isExpanded,
  onToggleClick,
}: Props) => {
  const handleCurrencyClick = useCallback(
    (currencyCode: string) => {
      setTargetCurrencyCode(currencyCode)
      onToggleClick()
    },
    [onToggleClick, setTargetCurrencyCode],
  )

  return (
    <Container isExpanded={isExpanded}>
      <Header>
        <Title>Kurzovní lístek</Title>
        <Date dateTime={date}>{formatDate(date)}</Date>
      </Header>
      <Table>
        <Thead>
          <tr>
            <th>Měna</th>
            <th>Kurz</th>
          </tr>
        </Thead>
        <Tbody>
          {currencies.map((currency) => (
            <tr
              key={currency.currencyCode}
              onClick={() => handleCurrencyClick(currency.currencyCode)}
            >
              <th>
                {currency.country} – {currency.currency} ({currency.currencyCode})
              </th>
              <td>{formatNumber(currency.rate)}</td>
            </tr>
          ))}
        </Tbody>
      </Table>
    </Container>
  )
}

export default CurrenciesTable
