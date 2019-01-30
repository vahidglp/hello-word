import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
// import { SocialIcon } from "react-social-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />
        <div classname="fullpage ">
          <h1 classname="title">{data.title}</h1>
        </div>
        <div>
          <h2>{data.subtitle}</h2>
        </div>
        <div>
          {/* <SocialIcon url="http://twitter.com/jaketrent" /> */}
        </div>
        <div classname="fullpage " />
        <div classname="fullpage " />
      </div>
    );
  }
}

export default App;
