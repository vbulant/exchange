import React from "react"

import ErrorMessage from "./ErrorMessage"

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
    return this.state.hasError ? <ErrorMessage /> : this.props.children
  }
}

export default ErrorBoundary
