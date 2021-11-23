import { QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

import GlobalStyle from "../styles/GlobalStyle"
import ErrorBoundary from "../components/ErrorBoundary"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default MyApp
