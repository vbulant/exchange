import { QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

import GlobalStyle from "../styles/GlobalStyle"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
