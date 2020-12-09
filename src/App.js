import React, { Component } from "react";
import "./App.css";
import Day1 from "./Components/Day1/Day1";
import Day2 from "./Components/Day2/Day2";
import Day3 from "./Components/Day3/Day3";
import Day4 from "./Components/Day4/Day4";
import Day5 from "./Components/Day5/Day5";
import Day6 from "./Components/Day6/Day6";
import Day7 from "./Components/Day7/Day7";
import Day8 from "./Components/Day8/Day8";
import Day9 from "./Components/Day9/Day9";
import Day10 from "./Components/Day10/Day10";
import Day11 from "./Components/Day11/Day11";

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
        <Day7 />
        <Day8 />
        <Day9 />
        <Day10 />
        <Day11 />
      </main>
    );
  }
}

export default App;
