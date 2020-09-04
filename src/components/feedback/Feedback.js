import React from "react";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class Feedback extends React.Component {
  state = { ...initialState };
  addFeedback = (e) => {
    e.persist();
    this.setState((prevState) => {
      return { [e.target.name]: prevState[e.target.name] + 1 };
    });
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button name="good" onClick={this.addFeedback}>
          Good
        </button>
        <button name="neutral" onClick={this.addFeedback}>
          Neutral
        </button>
        <button name="bad" onClick={this.addFeedback}>
          Bad
        </button>
        <h3>Statistics</h3>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </>
    );
  }
}
