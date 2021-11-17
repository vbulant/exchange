import { useQuery } from "react-query"

import fetchRates from "./fetchRates"
import Loading from "../Loading"
import ErrorMessage from "../ErrorMessage"
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
    return <ErrorMessage />
  }

  return children(data)
}

export default RatesFetcher
