import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
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
    console.log('This is Pure Component');
    return (
      <div>
        <h1>Pure Counter</h1>
        <p> {this.state.counter}</p>
        <button onClick={this.handleToggle}>Set toggle</button>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default PureCounterComponent;