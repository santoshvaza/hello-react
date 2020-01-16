import React from 'react';

class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'test',
      error: { error: null, errorInfo: null }
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error: { error: error, errorInfo: errorInfo } });
  }

  render() {
    if (this.state.error && this.state.error.error) {
    return <h1>Error occured - {this.state.error.error.message}</h1>;
    }
    return this.props.children;
  }

}


class Comp1 extends React.Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {
        counter: state.counter + 1
      };
    });
  }

  render() {
    if (this.state.counter === 5) {
      throw new Error(JSON.stringify({ error: 'fake', code: '007' }));
    }
    return (
      <>
        <p>Hello from Comp1</p>
        <button onClick={this.handleClick} >Click me {(5 - this.state.counter)} times for error</button>
      </>
    );
  }

}

class Comp2 extends React.Component {

  render() {
    return (
      <ErrorBoundary>
        <p>Hello from Comp2</p>
        <Comp1 />
      </ErrorBoundary>
    );
  }

}

class Comp3 extends React.Component {
  render() {
    return (
      <>
        <p>Hello from Comp3</p>
        <Comp2 />
      </>
    );
  }

}

function Main() {
  return <Comp3 />
}

export default Main;