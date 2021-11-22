import Head from "next/head"

import ErrorBoundary from "../ErrorBoundary"
import { Container } from "./Layout.styled"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Kurzovní lístek</title>
      </Head>
      <Container>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </Container>
    </>
  )
}

export default Layout
