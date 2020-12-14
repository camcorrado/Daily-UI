import React, { Component } from "react";
import "./Day15.css";

export default class Day15 extends Component {
  state = {
    light: false,
  };

  handleClick = () => {
    let status = this.state.light;
    if (status) {
      this.setState({ light: false });
    } else {
      this.setState({ light: true });
    }
  };

  render() {
    const { light } = this.state;
    return (
      <section className="onOffSwitch on">
        <div className="assignmentContainer">
          <div className="assignment">
            <h2 className="dayNumber">Day 15</h2>
            <h3 className="dayDescription">On/Off Switch</h3>
          </div>
        </div>
        <div className="room">
          <div
            className="buttonWall"
            style={
              light
                ? { backgroundColor: "beige" }
                : { backgroundColor: "black" }
            }
          >
            <button
              className={light ? `switchOn` : `switchOff`}
              onClick={() => this.handleClick()}
            ></button>
          </div>

          <div className="roomImagery">
            <div className="placeholder" style={{ zIndex: 5 }}>
              <img
                src="https://i.imgur.com/RbTFnjd.jpg"
                alt="placeholder for images"
                className="placeholderImage"
              />
            </div>
            <div
              className="diana"
              style={light ? { zIndex: 0 } : { zIndex: 1 }}
            >
              <img
                src="https://i.imgur.com/JKAMETE.gif"
                alt="A spooky figure in a dark room"
                className="dianaImagery"
              />
            </div>
            <div
              className="noDiana"
              style={light ? { zIndex: 1 } : { zIndex: 0 }}
            >
              <img
                src="https://i.imgur.com/txLXdNo.gif"
                alt="An empty room"
                className="dianaImagery"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
