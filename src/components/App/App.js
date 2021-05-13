import React, { Component } from "react";

import "./App.css";

import AppHeader from "../AppHeader";
import AppSearchPanel from "../AppSearchPanel";
import AppTodoList from "../AppTodoList";
import AppAddItemPanel from "../AppAddItemPanel";

class App extends Component {
  idx = 1;

  state = {
    title: "Todo List",
    searchValue: "",
    addItemValue: "",
    todoData: [
      this.createItem("Learn HTML5"),
      this.createItem("Learn CSS3"),
      this.createItem("Learn JavaScript"),
      this.createItem("Learn React"),
      this.createItem("Learn Redux"),
    ],
  };

  createItem(label) {
    return {
      id: this.idx++,
      label,
      done: false,
      important: false,
    };
  }

  // text in search panel
  enterLabelSearch = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };

  // text in add item panel
  addLabelItem = (e) => {
    this.setState({
      addItemValue: e.target.value,
    });
  };

  render() {
    const { title, searchValue, addItemValue, todoData } = this.state;
    const { enterLabelSearch, addLabelItem } = this;
    return (
      <div className="container">
        <AppHeader title={title} />
        <AppSearchPanel
          value={searchValue}
          enterLabelSearch={enterLabelSearch}
        />
        <AppTodoList todoData={todoData} />
        <AppAddItemPanel value={addItemValue} addLabelItem={addLabelItem} />
      </div>
    );
  }
}

export default App;
