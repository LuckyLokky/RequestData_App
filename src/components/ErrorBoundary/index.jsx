import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  componentDidCatch(error) {
    if (error)
      this.setState({
        error: "E R R O R",
      });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    return error ? <div>{error}</div> : <div>{children}</div>;
  }
}

export default ErrorBoundary;
