import React from "react";

import "./AppTodoList.css";

const AppTodoList = () => {
  return (
    <div className="todo-list">
      <ul className="list">
        <li className="list-item">Learn HTML5</li>
        <li className="list-item">Learn CSS3</li>
        <li className="list-item">Learn JavaScript</li>
        <li className="list-item">Learn React</li>
        <li className="list-item">Learn Redux</li>
      </ul>
    </div>
  );
};

export default AppTodoList;
