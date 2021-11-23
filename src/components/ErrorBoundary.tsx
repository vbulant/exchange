import React from "react"

import Error from "./Error/Error"

type Props = {}

type State = {
  hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    return this.state.hasError ? <Error /> : this.props.children
  }
}

export default ErrorBoundary
