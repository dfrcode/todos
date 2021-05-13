import React, { Component } from "react";

import "./App.css";

import AppHeader from "../AppHeader";
import AppSearchPanel from "../AppSearchPanel";
import AppTodoList from "../AppTodoList";
import AppAddItemPanel from "../AppAddItemPanel";

class App extends Component {
  state = {
    title: "Todo List",
    searchValue: "",
    addItemValue: "",
  };

  enterLabelSearch = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  addLabelItem = (e) => {
    this.setState({
      addItemValue: e.target.value,
    });
  };

  render() {
    const { title, searchValue, addItemValue } = this.state;
    const { enterLabelSearch, addLabelItem } = this;
    return (
      <div className="container">
        <AppHeader title={title} />
        <AppSearchPanel
          value={searchValue}
          enterLabelSearch={enterLabelSearch}
        />
        <AppTodoList />
        <AppAddItemPanel value={addItemValue} addLabelItem={addLabelItem}/>
      </div>
    );
  }
}

export default App;
