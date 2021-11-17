import Head from "next/head"

import ErrorBoundary from "../components/ErrorBoundary"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Exchange</title>
      </Head>
      <main>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
    </>
  )
}

export default Layout
