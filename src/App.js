import React, { Component } from "react";
import "./App.css";
import Day1 from "./Components/Day1/Day1";

class App extends Component {
  render() {
    return (
      <main className="App">
        <h1>Daily UI Challenges</h1>
        <Day1 />
      </main>
    );
  }
}

export default App;
