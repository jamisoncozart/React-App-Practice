import React, { Component } from 'react';

/*
Wrap any JSX in this component to catch any errors that might 
occur within the child elements of this component
*/

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error})
  }

  // Renders when errors are thrown
  render() {
    if(this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;