import React, { Component } from "react";
import "./Day14.css";

export default class Day14 extends Component {
  constructor() {
    super();
    this.timer = 0;
  }

  state = {
    started: false,
    seconds: 10,
    message: "",
    outcomeColor: "gray",
    buttons: [],
    buttonsClicked: {
      1: false,
      2: false,
      3: false,
      4: false,
    },
  };

  startGame = async () => {
    await this.setState({
      message: "",
      started: true,
      outcomeColor: "gray",
    });
    this.shuffle([
      { buttonNum: 1 },
      { buttonNum: 2 },
      { buttonNum: 3 },
      { buttonNum: 4 },
    ]);
  };

  shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    this.setState({ buttons: array });
    this.startTimer();
  };

  startTimer = () => {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = 0;
    this.setState({
      started: false,
      seconds: 10,
      buttonsClicked: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    });
  };

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      seconds: seconds,
    });
    if (seconds === 0) {
      this.setState({ message: `You lose!`, outcomeColor: "crimson" });
      this.stopTimer();
    }
  };

  resetButtons = () => {
    this.setState({
      buttonsClicked: {
        1: false,
        2: false,
        3: false,
        4: false,
      },
    });
  };

  handleClick = (num) => {
    const { buttonsClicked } = this.state;
    if (
      num === 1 &&
      buttonsClicked[2] === false &&
      buttonsClicked[3] === false &&
      buttonsClicked[4] === false
    ) {
      this.setState({
        message: "",
        buttonsClicked: {
          ...this.state.buttonsClicked,
          1: true,
        },
      });
    } else if (num === 2 && buttonsClicked[1] === true) {
      this.setState({
        buttonsClicked: {
          ...this.state.buttonsClicked,
          2: true,
        },
      });
    } else if (
      num === 3 &&
      buttonsClicked[1] === true &&
      buttonsClicked[2] === true
    ) {
      this.setState({
        buttonsClicked: {
          ...this.state.buttonsClicked,
          3: true,
        },
      });
    } else if (
      num === 4 &&
      buttonsClicked[1] === true &&
      buttonsClicked[2] === true &&
      buttonsClicked[3] === true
    ) {
      this.setState({
        buttonsClicked: {
          ...this.state.buttonsClicked,
          4: true,
        },
        message: `You're a winner, baby!`,
        outcomeColor: "goldenrod",
      });
      this.stopTimer();
    } else {
      this.setState({ message: `Incorrect!` });
      this.resetButtons();
    }
  };

  render() {
    const {
      started,
      seconds,
      message,
      buttons,
      buttonsClicked,
      outcomeColor,
    } = this.state;
    return (
      <section
        className="countdownTimer"
        style={{ backgroundColor: outcomeColor }}
      >
        <div className="assignment">
          <h2 className="dayNumber">Day 14</h2>
          <h3 className="dayDescription">Countdown Timer</h3>
        </div>
        <div className="game">
          <div className="gameRules">
            <p>Click the buttons in the correct order before time runs out.</p>
            <p>Buttons are randomized each round.</p>
          </div>
          <div className="gameInfo">
            {!started ? (
              <button onClick={this.startGame}>Start!</button>
            ) : (
              <p>{seconds}</p>
            )}
          </div>
          {!started ? (
            <></>
          ) : (
            <div className="gameButtons">
              {buttons.map((button) => (
                <button
                  key={button.buttonNum}
                  className={
                    buttonsClicked[button.buttonNum] === true
                      ? `${button.buttonNum} correct`
                      : `${button.buttonNum}`
                  }
                  onClick={() => this.handleClick(button.buttonNum)}
                >
                  ?
                </button>
              ))}
            </div>
          )}
          <h1>{message}</h1>
        </div>
      </section>
    );
  }
}
