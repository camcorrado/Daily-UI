import React, { Component } from "react";
import "./Day5.css";

export default class Day5 extends Component {
  render() {
    return (
      <section className="appIcon">
        <div className="assignment">
          <h2 className="dayNumber">Day 5</h2>
          <h3 className="dayDescription">App Icon</h3>
        </div>
        <div className="appIconContainer">
          <div className="logoFace">
            <p>
              <span className="leftArm">⊂</span>(•◡•)
              <span className="rightArm">⊃</span>
            </p>
          </div>
          <div className="body">
            <span>(</span>
            <span>)</span>
          </div>
          <div className="feet">
            <span className="leftFoot">⊂</span>
            <span className="rightFoot">⊃</span>
          </div>
        </div>
      </section>
    );
  }
}
