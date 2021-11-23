import { QueryClient, QueryClientProvider } from "react-query"
import type { AppProps } from "next/app"

import GlobalStyle from "../styles/GlobalStyle"
import ErrorBoundary from "../components/ErrorBoundary"
import Layout from "../components/Layout/Layout"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ErrorBoundary>
  )
}

export default MyApp
