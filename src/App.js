import React, { Component } from "react";
import "./App.css";
import Day1 from "./Components/Day1/Day1";
import Day2 from "./Components/Day2/Day2";
import Day3 from "./Components/Day3/Day3";
import Day4 from "./Components/Day4/Day4";
import Day5 from "./Components/Day5/Day5";
import Day6 from "./Components/Day6/Day6";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Daily UI Challenges</h1>
        <Day1 />
        <Day2 />
        <Day3 />
        <Day4 />
        <Day5 />
        <Day6 />
      </main>
    );
  }
}

export default App;
