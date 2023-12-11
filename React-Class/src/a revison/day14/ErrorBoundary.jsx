// import React, { Component } from "react";

const { Component } = require("react");

// export default class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }
//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }
//   componentDidCatch(error, info) {
//     console.log("From ErrorBoundary", error, info);
//   }
//   render() {
//     if (this.state.hasError) {
//       return <h1>Some Error Occur Check In Console</h1>;
//     }
//     return this.props.children;
//   }
// }

// export default errorBoundries

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }
// export default ErrorBoundary;

// class ErrorBoundary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (hasError) {
//       return <div>Check error in console</div>;
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Some Error occour check in console</h1>;
    }
    return this.props.children;
  }
}
