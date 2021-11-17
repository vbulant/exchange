import type { NextPage } from "next"

import Layout from "../components/Layout"
import RatesFetcher from "../components/RatesFetcher/RatesFetcher"
import CurrenciesTable from "../components/CurrenciesTable"

const Home: NextPage = () => {
  return (
    <Layout>
      <RatesFetcher>
        {(data) => (
          <>
            <h1>Kurzovní lístek {data.date}</h1>
            <CurrenciesTable headers={data.labels} entries={data.entries} />
          </>
        )}
      </RatesFetcher>
    </Layout>
  )
}

export default Home
