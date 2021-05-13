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
    todoData: [
      {
        id: 1,
        label: "Learn HTML5",
        done: false,
        important: false,
      },
      {
        id: 2,
        label: "Learn CSS3",
        done: false,
        important: false,
      },
      {
        id: 3,
        label: "Learn JavaScript",
        done: false,
        important: false,
      },
      {
        id: 4,
        label: "Learn React",
        done: false,
        important: false,
      },
      {
        id: 5,
        label: "Learn Redux",
        done: false,
        important: false,
      },
    ],
  };

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
        <AppTodoList todoData={todoData}/>
        <AppAddItemPanel value={addItemValue} addLabelItem={addLabelItem} />
      </div>
    );
  }
}

export default App;
