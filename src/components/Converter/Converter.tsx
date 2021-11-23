import { useCallback, useState } from "react"

import useConvertAmount from "./useConvertAmount"
import { formatNumber } from "../../utils"
import type { Currency } from "../../types"
import {
  Container,
  Form,
  Section,
  Input,
  CurrencyFrom,
  Arrow,
  Value,
  SelectCurrencyTo,
  Toggle,
} from "./Converter.styled"

type Props = {
  currencies: readonly Currency[]
  targetCurrencyCode: string
  setTargetCurrencyCode: (currencyCode: string) => void
  onToggleClick: () => void
  isCollapsed: boolean
}

const Converter = ({
  currencies,
  targetCurrencyCode,
  setTargetCurrencyCode,
  onToggleClick,
  isCollapsed,
}: Props) => {
  const getCurrency = useCallback(
    (currencyCode: string) => {
      return currencies.find((entry) => entry.currencyCode === currencyCode)
    },
    [currencies],
  )

  const [amount, setAmount] = useState("100")
  const targetCurrency = getCurrency(targetCurrencyCode)
  const value = useConvertAmount(amount, targetCurrency)
  const hasError = amount.length > 0 && !value

  const handleSelectCurrency = useCallback(
    (e: React.SyntheticEvent<HTMLSelectElement>) => setTargetCurrencyCode(e.currentTarget.value),
    [setTargetCurrencyCode],
  )

  return (
    <Container isCollapsed={isCollapsed}>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Section>
          <Input
            value={amount}
            min={1}
            onChange={(e) => setAmount(e.target.value)}
            aria-label="Množství Kč"
            hasError={hasError}
          />
          <CurrencyFrom>CZK</CurrencyFrom>
          <Arrow>{"\u2192"}</Arrow>
        </Section>
        <Section>
          <Value aria-label={`Hodnota v ${targetCurrencyCode}`}>
            {value ? formatNumber(value) : 0}
          </Value>
          <SelectCurrencyTo
            onChange={handleSelectCurrency}
            value={targetCurrencyCode}
            aria-label="měna"
          >
            {currencies.map(({ currencyCode }) => {
              return (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode}
                </option>
              )
            })}
          </SelectCurrencyTo>
        </Section>
      </Form>
      <Toggle onClick={onToggleClick}>{isCollapsed ? "Skrýt" : "Zobrazit"} kurzovní lístek</Toggle>
    </Container>
  )
}

export default Converter
