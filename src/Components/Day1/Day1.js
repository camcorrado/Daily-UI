import React, { Component } from "react";
import "./Day1.css";

export default class Day1 extends Component {
  state = {
    error: null,
    success: null,
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null, success: null });

    const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])[\S]+/;

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      terms,
    } = ev.target;

    if (password.value !== confirmPassword.value) {
      this.setState({ error: `Passwords do not match.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.length < 8
    ) {
      this.setState({ error: `Password must be longer than 8 characters.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.length > 72
    ) {
      this.setState({ error: `Password must be less than 72 characters.` });
    } else if (
      password.value === confirmPassword.value &&
      password.value.includes(" ")
    ) {
      this.setState({ error: `Password must not include spaces.` });
    } else if (
      password.value === confirmPassword.value &&
      !REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(password.value)
    ) {
      this.setState({
        error: `Password must contain 1 upper case, lower case, number and special character.`,
      });
    } else {
      this.setState({ success: `Thank you for signing up!` });
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      password.value = "";
      confirmPassword.value = "";
      terms.checked = false;
    }
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="signUp">
        <div className="assignment">
          <h2 className="dayNumber">Day 1</h2>
          <h3 className="dayDescription">Sign Up Form</h3>
        </div>
        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <h1>Sign Up</h1>
          <div role="alert" className="alert">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </div>
          <div className="nameInputs">
            <input
              type="text"
              name="firstName"
              id="firstName"
              maxLength="20"
              minLength="2"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              maxLength="20"
              minLength="2"
              placeholder="Last Name"
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
              required
            />
          </div>
          <div className="passwordInput">
            <input
              type="password"
              name="password"
              id="password"
              maxLength="20"
              placeholder="Password"
              required
            />
          </div>
          <div className="confirmPasswordInput">
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              maxLength="20"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="termsOfService">
            <label htmlFor="terms of service" id="termsOfService">
              I have read &amp; agree to the terms of service:
            </label>
            <input type="checkbox" name="terms" id="terms" required />
          </div>
          <div className="buttons">
            <button type="submit" className="primary">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    );
  }
}
