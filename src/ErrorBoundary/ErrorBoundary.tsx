import React from "react";

import type {
  ErrorBoundaryProps,
  ErrorBoundaryState
} from "./ErrorBoundary.types";

/**
 * this is just copied from a standardized ErrorBoundry and
 * can be customized as we see fit
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    /* eslint-disable-next-line */
    console.error(this, error, errorInfo);
    /* eslint-enable */
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    const { error, hasError } = this.state;

    if (hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong. {error?.message}</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
