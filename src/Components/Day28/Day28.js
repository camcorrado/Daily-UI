import React, { Component } from "react";
import "./Day28.css";

export default class Day28 extends Component {
  state = {
    success: false,
  };

  handleSubmit = (ev) => {
    ev.preventDefault();

    const { firstName, lastName, email, message } = ev.target;

    this.setState({
      success: true,
    });
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  };

  handleReset = (ev) => {
    ev.preventDefault();
    this.setState({
      success: false,
    });
  };

  render() {
    const { success } = this.state;
    return (
      <section className="contactUs">
        <div className="assignment">
          <h2 className="dayNumber">Day 28</h2>
          <h3 className="dayDescription">Contact Us</h3>
        </div>
        {success ? (
          <form className="contactUsForm" onSubmit={this.handleReset}>
            <h1>Contact Us</h1>
            <p className="success">
              Thank you for contacting us. Typical responses take 1-2 business
              days.
            </p>
            <div className="buttons">
              <button type="submit" className="primary">
                Send Another Message
              </button>
            </div>
          </form>
        ) : (
          <form className="contactUsForm" onSubmit={this.handleSubmit}>
            <h1>Contact Us</h1>
            <div className="nameInputs">
              <input
                type="text"
                name="firstName"
                id="firstName"
                maxLength="20"
                minLength="2"
                placeholder="First Name"
                aria-required="true"
                required
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                maxLength="20"
                minLength="2"
                placeholder="Last Name"
                aria-required="true"
                required
              />
            </div>
            <div className="emailInput">
              <input
                type="email"
                name="email"
                id="email"
                maxLength="120"
                placeholder="Email"
                aria-required="true"
                required
              />
            </div>
            <div className="messageInput">
              <textarea
                name="message"
                id="message"
                rows="15"
                aria-required="true"
                maxLength="120"
                required
              ></textarea>
            </div>
            <div className="buttons">
              <button type="submit" className="primary">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </section>
    );
  }
}
