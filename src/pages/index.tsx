import { useState, useCallback } from "react"
import Head from "next/head"
import type { NextPage } from "next"

import RatesFetcher from "../components/RatesFetcher/RatesFetcher"
import Converter from "../components/Converter/Converter"
import CurrenciesTable from "../components/CurrenciesTable/CurrenciesTable"

const Home: NextPage = () => {
  const [isCurrenciesTableExpanded, setIsCurrenciesTableExpanded] = useState(false)
  const [targetCurrencyCode, setTargetCurrencyCode] = useState<string>("USD")

  const handleToggleClick = useCallback(() => {
    setIsCurrenciesTableExpanded(!isCurrenciesTableExpanded)
  }, [isCurrenciesTableExpanded])

  return (
    <>
      <Head>
        <title>Kurzovní lístek</title>
      </Head>
      <RatesFetcher>
        {(data) => (
          <>
            {/* TODO improve naming – entries too ambiguous */}
            <Converter
              entries={data.entries}
              targetCurrencyCode={targetCurrencyCode}
              setTargetCurrencyCode={setTargetCurrencyCode}
              onToggleClick={handleToggleClick}
              isCollapsed={isCurrenciesTableExpanded}
            />
            <CurrenciesTable
              entries={data.entries}
              date={data.date}
              isExpanded={isCurrenciesTableExpanded}
              setTargetCurrencyCode={setTargetCurrencyCode}
              onToggleClick={handleToggleClick}
            />
          </>
        )}
      </RatesFetcher>
    </>
  )
}

export default Home
