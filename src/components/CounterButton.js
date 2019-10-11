import React, { Component } from "react";

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  updateCount() {
    this.setState(state => {
      return { count: this.state.count + 1 };
    });
  }

  render() {
    return (
      <button
        id={"counter"}
        color={this.props.color}
        onClick={this.updateCount.bind(this)}
      >
        Count on me: {this.state.count}
      </button>
    );
  }
}

export default CounterButton;
