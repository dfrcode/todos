import React, { Component } from "react";

import "./App.css";

import AppHeader from "../AppHeader";
import AppSearchPanel from "../AppSearchPanel";
import AppTodoList from "../AppTodoList";

class App extends Component {
  state = {
    title: "Todo List",
    searchValue: "",
  };

  enterLabelSearch = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  render() {
    const { title, searchValue } = this.state;
    const { enterLabelSearch } = this
    return (
      <div className="container">
        <AppHeader title={title} />
        <AppSearchPanel value={searchValue} enterLabelSearch={enterLabelSearch}/>
        <AppTodoList />
      </div>
    );
  }
}

export default App;
