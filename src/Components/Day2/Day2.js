import React, { Component } from "react";
import "./Day2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";

export default class Day2 extends Component {
  state = {
    error: null,
    success: null,
    zipcode: "",
    phone: "",
    cardNumber: "",
    CVC: "",
    expirationMonth: "",
    expirationYear: "",
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({ error: null, success: null });
    const statesArray = [
      "AL",
      "AK",
      "AS",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "DC",
      "FM",
      "FL",
      "GA",
      "GU",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MH",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "MP",
      "OH",
      "OK",
      "OR",
      "PW",
      "PA",
      "PR",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VI",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ];

    const {
      shippingFirstName,
      shippingLastName,
      streetAddress,
      city,
      state,
      zipcode,
      email,
      phone,
      billingFirstName,
      billingLastName,
      cardNumber,
      CVC,
      expirationMonth,
      expirationYear,
    } = ev.target;

    let date = new Date();
    let currentYear = date.getFullYear().toString().slice(2, 4);
    let currentMonth = date.getMonth() + 1;

    let letters = /^[A-Za-z]+$/;

    if (zipcode.value.length < 5) {
      this.setState({ error: `Please enter a valid zipcode.` });
    } else {
      const url = `https://cors-anywhere.herokuapp.com/https://phzmapi.org/${zipcode.value}.json`;
      fetch(url).then((response) => {
        if (!response.ok) {
          this.setState({ error: `Please enter a valid zipcode.` });
        }
      });
    }

    if (!shippingFirstName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid first name in the shipping section.`,
      });
    } else if (!shippingLastName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid last name in the shipping section.`,
      });
    } else if (!city.value.match(letters)) {
      this.setState({
        error: `Please enter a valid city.`,
      });
    } else if (phone.value.length < 10) {
      this.setState({
        error: `Please enter a valid phone number.`,
      });
    } else if (!statesArray.includes(state.value)) {
      this.setState({ error: `Please enter a valid state.` });
    } else if (!billingFirstName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid first name in the billing section.`,
      });
    } else if (!billingLastName.value.match(letters)) {
      this.setState({
        error: `Please enter a valid last name in the billing section.`,
      });
    } else if (cardNumber.value.length < 16) {
      this.setState({
        error: `Please enter a valid credit card number.`,
      });
    } else if (CVC.value.length < 3) {
      this.setState({
        error: `Please enter a valid CVC.`,
      });
    } else if (expirationMonth.value.length < 2) {
      this.setState({
        error: `Please enter a valid two digit month.`,
      });
    } else if (expirationMonth.value < 1 || expirationMonth.value > 12) {
      this.setState({ error: `Please enter a valid month.` });
    } else if (
      expirationYear.value < currentYear ||
      expirationYear.value.length < 2
    ) {
      this.setState({ error: `Please enter a valid year.` });
    } else if (
      Number(expirationMonth.value) < currentMonth &&
      expirationYear.value <= Number(currentYear)
    ) {
      this.setState({ error: `Please enter a valid expiration date.` });
    } else {
      this.setState({ success: `Your order has been processed!` });
      shippingFirstName.value = "";
      shippingLastName.value = "";
      streetAddress.value = "";
      city.value = "";
      state.value = "";
      zipcode.value = "";
      email.value = "";
      phone.value = "";
      billingFirstName.value = "";
      billingLastName.value = "";
      cardNumber.value = "";
      CVC.value = "";
      expirationMonth.value = "";
      expirationYear.value = "";
    }
  };

  handleChangeInputZipcode = (ev) => {
    const { value, maxLength } = ev.target;
    const zipcode = value.slice(0, maxLength);

    this.setState({
      zipcode,
    });
  };

  handleChangeInputPhone = (ev) => {
    const { value, maxLength } = ev.target;
    const phone = value.slice(0, maxLength);

    this.setState({
      phone,
    });
  };

  handleChangeInputCardNumber = (ev) => {
    const { value, maxLength } = ev.target;
    const cardNumber = value.slice(0, maxLength);

    this.setState({
      cardNumber,
    });
  };

  handleChangeInputCVC = (ev) => {
    const { value, maxLength } = ev.target;
    const CVC = value.slice(0, maxLength);

    this.setState({
      CVC,
    });
  };

  handleChangeInputExpirationMonth = (ev) => {
    const { value, maxLength } = ev.target;
    const expirationMonth = value.slice(0, maxLength);

    this.setState({
      expirationMonth,
    });
  };

  handleChangeInputExpirationYear = (ev) => {
    const { value, maxLength } = ev.target;
    const expirationYear = value.slice(0, maxLength);

    this.setState({
      expirationYear,
    });
  };

  render() {
    const { error, success } = this.state;
    return (
      <section className="checkout">
        <div className="assignment">
          <h2 className="dayNumber">Day 2</h2>
          <h3 className="dayDescription">Checkout Form</h3>
        </div>
        <div className="checkoutTable">
          <h1 className="checkoutTitle">Checkout</h1>
          <div role="alert" className="alert">
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </div>
          <div className="checkoutInfo">
            <div className="cart">
              <div className="cartHeader">
                <h2>Cart</h2>
                <h2>4</h2>
              </div>
              <div className="cartItem">
                <p className="itemNumber">Item 1</p>
                <p className="itemPrice">$5</p>
              </div>
              <div className="cartItem">
                <p className="itemNumber">Item 2</p>
                <p className="itemPrice">$10</p>
              </div>
              <div className="cartItem">
                <p className="itemNumber">Item 3</p>
                <p className="itemPrice">$7</p>
              </div>
              <div className="cartItem">
                <p className="itemNumber">Item 4</p>
                <p className="itemPrice">$2</p>
              </div>
              <div className="cartTotal">
                <p className="totalHeader">Total</p>
                <p className="totalPrice">$24</p>
              </div>
            </div>
            <form className="checkoutForm" onSubmit={this.handleSubmit}>
              <div className="shippingInputs">
                <h2>Shipping</h2>
                <div className="shippingNameInputs">
                  <input
                    type="text"
                    name="shippingFirstName"
                    id="shippingFirstName"
                    maxLength="20"
                    minLength="2"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="shippingLastName"
                    id="shippingLastName"
                    maxLength="20"
                    minLength="2"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="streetAddressInput">
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    placeholder="Street Address"
                    required
                  />
                </div>
                <div className="cityStateZipcodeInputs">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                    required
                  />
                  <input
                    type="number"
                    name="zipcode"
                    id="zipcode"
                    placeholder="Zipcode"
                    maxLength="5"
                    onChange={this.handleChangeInputZipcode}
                    value={this.state.zipcode}
                    required
                  />
                </div>
                <div className="emailPhoneInputs">
                  <input
                    type="email"
                    name="email"
                    id="shippingEmail"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    maxLength="10"
                    onChange={this.handleChangeInputPhone}
                    value={this.state.phone}
                    required
                  />
                </div>
              </div>
              <div className="billingInputs">
                <h2>Billing</h2>
                <div className="billingNameInputs">
                  <input
                    type="text"
                    name="billingFirstName"
                    id="billingFirstName"
                    maxLength="20"
                    minLength="2"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="billingLastName"
                    id="billingLastName"
                    maxLength="20"
                    minLength="2"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="cardNumberInput">
                  <input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    placeholder="Credit Card Number"
                    maxLength="16"
                    onChange={this.handleChangeInputCardNumber}
                    value={this.state.cardNumber}
                    required
                  />
                </div>
                <div className="CVCExpirationsInputs">
                  <input
                    type="number"
                    name="CVC"
                    id="CVC"
                    placeholder="CVC"
                    maxLength="3"
                    onChange={this.handleChangeInputCVC}
                    value={this.state.CVC}
                    required
                  />
                  <input
                    type="number"
                    name="expirationMonth"
                    id="expirationMonth"
                    placeholder="MM"
                    maxLength="2"
                    onChange={this.handleChangeInputExpirationMonth}
                    value={this.state.expirationMonth}
                    required
                  />
                  <input
                    type="number"
                    name="expirationYear"
                    id="expirationYear"
                    placeholder="YY"
                    maxLength="2"
                    onChange={this.handleChangeInputExpirationYear}
                    value={this.state.expirationYear}
                    required
                  />
                </div>
                <div className="cardTypes">
                  <FontAwesomeIcon icon={faCcVisa} className="faIcon visa" />
                  <FontAwesomeIcon
                    icon={faCcMastercard}
                    className="faIcon mastercard"
                  />
                  <FontAwesomeIcon icon={faCcAmex} className="faIcon amex" />
                  <FontAwesomeIcon
                    icon={faCcDiscover}
                    className="faIcon discover"
                  />
                </div>
              </div>
              <div className="buttons">
                <button type="submit" className="primary">
                  Checkout
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
