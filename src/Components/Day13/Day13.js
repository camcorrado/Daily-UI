import React, { Component } from "react";
import "./Day13.css";

export default class Day13 extends Component {
  render() {
    return (
      <section className="directMessaging">
        <div className="assignment">
          <h2 className="dayNumber">Day 13</h2>
          <h3 className="dayDescription">Direct Messaging</h3>
        </div>
        <div className="messenger"></div>
      </section>
    );
  }
}
