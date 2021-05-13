import React, { Component } from "react";

import "./App.css";

import AppHeader from "../AppHeader";

class App extends Component {
  state = {
    title: "Todo List",
  };

  render() {
    const { title } = this.state;
    return (
      <div className="container">
        <AppHeader title={title} />
      </div>
    );
  }
}

export default App;
