import { useState } from "react"
import type { NextPage } from "next"

import Layout from "../components/Layout/Layout"
import RatesFetcher from "../components/RatesFetcher/RatesFetcher"
import Converter from "../components/Converter/Converter"
import CurrenciesTable from "../components/CurrenciesTable"

const Home: NextPage = () => {
  const [targetCurrencyCode, setTargetCurrencyCode] = useState<string>("USD")

  return (
    <Layout>
      <RatesFetcher>
        {(data) => (
          <>
            {/* TODO improve naming – entries too ambiguous */}
            <Converter
              entries={data.entries}
              targetCurrencyCode={targetCurrencyCode}
              setTargetCurrencyCode={setTargetCurrencyCode}
            />
            <h1>Kurzovní lístek {data.date}</h1>
            <CurrenciesTable
              headers={data.labels}
              entries={data.entries}
              setTargetCurrencyCode={setTargetCurrencyCode}
            />
          </>
        )}
      </RatesFetcher>
    </Layout>
  )
}

export default Home
