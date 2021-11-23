import { useQuery } from "react-query"

import fetchRates from "./fetchRates"
import Loading from "../Loading/Loading"
import Error from "../Error/Error"
import type { Data } from "../../types"

type Props = {
  children: (data: Data) => JSX.Element
}

const RatesFetcher = ({ children }: Props) => {
  const { isLoading, error, data } = useQuery<Data, Error>("exchangeRates", fetchRates)

  if (isLoading) {
    return <Loading />
  }

  if (error ?? !data) {
    return <Error />
  }

  return children(data)
}

export default RatesFetcher
