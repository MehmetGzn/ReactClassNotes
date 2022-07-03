import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0,
    };
    this.handleInc = this.handleInc.bind(this);
  }
  handleInc() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div className="container text-center mt-4">
        <h1 className="display-4 text-danger m4">Count:{this.state.count}</h1>
        <button onClick={this.handleInc} className="btn btn-success">
          Increment
        </button>
        <button className="btn btn-danger">Delete</button>
        <button onClick={this.handleDec} className="btn btn-dark">
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
