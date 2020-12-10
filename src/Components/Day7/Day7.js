import React, { Component } from "react";
import "./Day7.css";

export default class Day7 extends Component {
  state = {
    backgroundColor: "#FFFFF",
    backdrop: `url("https://i.imgur.com/dwVtTdE.png")`,
    skyObject: `url("https://i.imgur.com/ZVB98xG.png"), url("https://i.imgur.com/bmht48K.png")`,
    foreground: `url("https://i.imgur.com/P2rGJUc.png")`,
  };

  handleColorChange = (value) => {
    this.setState({ backgroundColor: value });
  };

  handleBackdropChange = (value) => {
    if (value === "stars") {
      this.setState({ backdrop: `url("https://i.imgur.com/dwVtTdE.png")` });
    } else if (value === "fog") {
      this.setState({ backdrop: `url("https://i.imgur.com/JpW3zNk.png")` });
    } else if (value === "storm") {
      this.setState({ backdrop: `url("https://i.imgur.com/9tdyHU3.png")` });
    } else if (value === "fire") {
      this.setState({ backdrop: `url("https://i.imgur.com/vFjLuzA.png")` });
    } else if (value === "glitch") {
      this.setState({ backdrop: `url("https://i.imgur.com/lbemxkY.png")` });
    } else {
      this.setState({ backdrop: `url("https://i.imgur.com/nMrMzdh.png")` });
    }
  };

  handleSkyObjectChange = (value) => {
    if (value === "moon") {
      this.setState({
        skyObject: `url("https://i.imgur.com/ZVB98xG.png"), url("https://i.imgur.com/bmht48K.png")`,
      });
    } else if (value === "sun") {
      this.setState({
        skyObject: `url("https://i.imgur.com/TL3SYym.png"), url("https://i.imgur.com/GGDZ8yU.png")`,
      });
    } else if (value === "ufo") {
      this.setState({
        skyObject: `url("https://i.imgur.com/4ulb9OM.png"), url("https://i.imgur.com/Ea4mcxS.png")`,
      });
    } else if (value === "meteor") {
      this.setState({
        skyObject: `url("https://i.imgur.com/sRHGRTb.png"), url("https://i.imgur.com/Ea4mcxS.png")`,
      });
    } else if (value === "hero") {
      this.setState({
        skyObject: `url("https://i.imgur.com/40ID0Zv.png"), url("https://i.imgur.com/Ea4mcxS.png")`,
      });
    } else {
      this.setState({
        skyObject: `url("https://i.imgur.com/Ea4mcxS.png"), url("https://i.imgur.com/Ea4mcxS.png")`,
      });
    }
  };

  handleForegroundChange = (value) => {
    if (value === "trees") {
      this.setState({
        foreground: `url("https://i.imgur.com/P2rGJUc.png")`,
      });
    } else if (value === "city") {
      this.setState({
        foreground: `url("https://i.imgur.com/tnXr3eN.png")`,
      });
    } else if (value === "zombies") {
      this.setState({
        foreground: `url("https://i.imgur.com/rfgeUuN.png")`,
      });
    } else if (value === "flowers") {
      this.setState({
        foreground: `url("https://i.imgur.com/f3dEz6L.png")`,
      });
    } else if (value === "graveyard") {
      this.setState({
        foreground: `url("https://i.imgur.com/lyhskF8.png")`,
      });
    } else if (value === "crowd") {
      this.setState({
        foreground: `url("https://i.imgur.com/36hGUju.png")`,
      });
    } else {
      this.setState({
        foreground: `url("https://i.imgur.com/Ea4mcxS.png")`,
      });
    }
  };

  render() {
    const { backgroundColor, backdrop, skyObject, foreground } = this.state;
    return (
      <section
        className="settings"
        style={{
          backgroundColor: backgroundColor,
          backgroundImage: `${foreground},${skyObject},${backdrop}`,
        }}
      >
        <div className="assignment">
          <h2 className="dayNumber">Day 7</h2>
          <h3 className="dayDescription">Settings</h3>
        </div>
        <div className="moodBoard">
          <form className="moodSettingsForm">
            <input
              type="color"
              id="backgroundColor"
              name="backgroundColor"
              defaultValue="#000033"
              onChange={(e) => this.handleColorChange(e.target.value)}
            />
            <select
              name="skyObject"
              id="skyObject"
              onChange={(e) => this.handleSkyObjectChange(e.target.value)}
            >
              <option value="moon">Moon</option>
              <option value="sun">Sun</option>
              <option value="hero">Hero</option>
              <option value="meteor">Meteor</option>
              <option value="ufo">Ufo</option>
              <option value="none">None</option>
            </select>
            <select
              name="backdrop"
              id="backdrop"
              onChange={(e) => this.handleBackdropChange(e.target.value)}
            >
              <option value="stars">Stars</option>
              <option value="fog">Fog</option>
              <option value="storm">Storm</option>
              <option value="fire">Fire</option>
              <option value="glitch">Glitch</option>
              <option value="none">None</option>
            </select>
            <select
              name="foreground"
              id="foreground"
              onChange={(e) => this.handleForegroundChange(e.target.value)}
            >
              <option value="trees">Trees</option>
              <option value="city">City</option>
              <option value="zombies">Zombies</option>
              <option value="flowers">Flowers</option>
              <option value="graveyard">Graveyard</option>
              <option value="crowd">Crowd</option>
              <option value="none">None</option>
            </select>
          </form>
        </div>
      </section>
    );
  }
}
