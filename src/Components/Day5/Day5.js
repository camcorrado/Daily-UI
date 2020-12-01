import React, { Component } from "react";
import "./Day5.css";

export default class Day5 extends Component {
  state = {
    error: null,
    success: null,
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="appIcon">
        <div className="assignment">
          <h2 className="dayNumber">Day 5</h2>
          <h3 className="dayDescription">App Icon</h3>
        </div>
      </section>
    );
  }
}
