import React, { Component } from "react";
import "./App.css";
import Day1 from "./Components/Day1/Day1";
import Day2 from "./Components/Day2/Day2";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Daily UI Challenges</h1>
        <Day1 />
        <Day2 />
      </main>
    );
  }
}

export default App;
