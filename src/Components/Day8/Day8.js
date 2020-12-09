import React, { Component } from "react";
import "./Day8.css";

export default class Day8 extends Component {
  render() {
    return (
      <section className="errorPage">
        <div className="assignment">
          <h2 className="dayNumber">Day 8</h2>
          <h3 className="dayDescription">404 Page</h3>
        </div>

        <div className="errorPageClouds">
          <div className="errorPageContents">
            <h1>404</h1>
            <h2>Page not found</h2>
            <p>Try going back to your previous page.</p>
          </div>
        </div>
      </section>
    );
  }
}
