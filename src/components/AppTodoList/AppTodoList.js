import React from "react";

import "./AppTodoList.css";

import { FaTrashAlt, FaExclamation } from "react-icons/fa";

const AppTodoList = (props) => {
  const { todoData, deleteItem } = props;
  const elements = todoData.map((todo) => (
    <li key={todo.id} className="list-item">
      <span className="item-label">{todo.label}</span>
      <ul className="list-fa">
        <li className="list-fa-item trash" onClick={() => deleteItem(todo.id)}>
          <FaTrashAlt />
        </li>
        <li className="list-fa-item important">
          <FaExclamation />
        </li>
      </ul>
    </li>
  ));

  return (
    <div className="todo-list">
      <ul className="list">{elements}</ul>
    </div>
  );
};

export default AppTodoList;
