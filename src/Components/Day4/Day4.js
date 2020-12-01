import React, { Component } from "react";
import "./Day4.css";

export default class Day4 extends Component {
  state = {
    error: null,
    success: null,
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="calculator">
        <div className="assignment">
          <h2 className="dayNumber">Day 4</h2>
          <h3 className="dayDescription">Calculator</h3>
        </div>
      </section>
    );
  }
}
