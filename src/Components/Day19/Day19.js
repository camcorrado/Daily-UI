import React, { Component } from "react";
import "./Day19.css";

export default class Day19 extends Component {
  state = {
    waluigiBar: "50%",
    genoBar: "15%",
    soraBar: "25%",
    crashBar: "10%",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { characterVote } = e.target;
    if (characterVote.value === "waluigi") {
      this.setState({
        waluigiBar: "59%",
        genoBar: "12%",
        soraBar: "22%",
        crashBar: "7%",
      });
    } else if (characterVote.value === "geno") {
      this.setState({
        waluigiBar: "47%",
        genoBar: "24%",
        soraBar: "22%",
        crashBar: "7%",
      });
    } else if (characterVote.value === "sora") {
      this.setState({
        waluigiBar: "47%",
        genoBar: "12%",
        soraBar: "34%",
        crashBar: "7%",
      });
    } else {
      this.setState({
        waluigiBar: "47%",
        genoBar: "12%",
        soraBar: "22%",
        crashBar: "19%",
      });
    }
  };

  render() {
    const { waluigiBar, genoBar, soraBar, crashBar } = this.state;
    return (
      <section className="leaderboard">
        <div className="assignment">
          <h2 className="dayNumber">Day 19</h2>
          <h3 className="dayDescription">Leaderboard</h3>
        </div>
        <div className="leaderboardContainer">
          <div className="leaderboardTitle">
            <h1>Who will be the next Super Smash Bros Ultimate Challenger?</h1>
          </div>
          <div className="leaderboardHeadshots">
            <div className="leaderboardHeadshotContainer">
              <img
                src="https://i.imgur.com/x56sxfe.png"
                alt="waluigi"
                className="waluigi"
              />
            </div>
            <div className="leaderboardHeadshotContainer">
              <img
                src="https://i.imgur.com/wGCJQUY.png"
                alt="geno"
                className="geno"
              />
            </div>
            <div className="leaderboardHeadshotContainer">
              <img
                src="https://i.imgur.com/cVuvnAB.png"
                alt="sora"
                className="sora"
              />
            </div>
            <div className="leaderboardHeadshotContainer">
              <img
                src="https://i.imgur.com/qRb2JqV.png"
                alt="crash"
                className="crash"
              />
            </div>
          </div>
          <div className="leaderboardGraph">
            <div className="waluigi bar" style={{ height: waluigiBar }}></div>
            <div className="geno bar" style={{ height: genoBar }}></div>
            <div className="sora bar" style={{ height: soraBar }}></div>
            <div className="crash bar" style={{ height: crashBar }}></div>
          </div>
          <form className="leaderboardForm" onSubmit={this.handleSubmit}>
            <div className="leaderboardInputs">
              <input
                type="radio"
                id="waluigi"
                name="characterVote"
                value="waluigi"
              />
              <input type="radio" id="geno" name="characterVote" value="geno" />
              <input type="radio" id="sora" name="characterVote" value="sora" />
              <input
                type="radio"
                id="crash"
                name="characterVote"
                value="crash"
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </section>
    );
  }
}
