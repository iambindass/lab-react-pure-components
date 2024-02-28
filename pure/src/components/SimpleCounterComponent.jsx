import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      toggle: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({ toggle: !prevState.toggle }));
  };

  handleIncrement = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }
  };

  render() {
    console.log('This is Simple Component');
    return (
      <div>
        <h1>Simple Counter</h1>
        <p>{this.state.counter}</p>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;