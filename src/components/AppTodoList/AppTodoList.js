import React from "react";

import "./AppTodoList.css";

import {
  FaPencilAlt,
  FaTrashAlt,
  FaExclamation,
  FaExchangeAlt,
  FaTimes,
  FaInfoCircle,
} from "react-icons/fa";

const AppTodoList = (props) => {
  const {
    todoData,
    deleteItem,
    addDoneItem,
    changeItem,
    addimportantItem,
    value,
    changeLabelItem,
    changeClickLabel,
  } = props;

  const elements = todoData.map((todo) => (
    <li
      key={todo.id}
      className={
        todo.done
          ? "list-item done"
          : todo.important
          ? "list-item important"
          : "list-item"
      }
    >
      <div className="box-front-item">
        <span className="item-label" onClick={() => addDoneItem(todo.id)}>
          {todo.label === "" ? "NO LABEL" : todo.label}
        </span>
        <ul className="list-fa">
          <li
            className="list-fa-item trash"
            onClick={() => deleteItem(todo.id)}
          >
            <FaTrashAlt />
          </li>
          <li
            className="list-fa-item pencil"
            onClick={() => changeItem(todo.id)}
          >
            <FaPencilAlt />
          </li>
          <li
            className="list-fa-item important"
            onClick={() => addimportantItem(todo.id)}
          >
            <FaExclamation />
          </li>
        </ul>
      </div>

      {todo.change ? (
        <div className="box-back-item">
          <input
            className="input-change-text-item"
            type="text"
            placeholder="Changed Text Item"
            value={value}
            onChange={changeLabelItem}
          />
          <ul className="list-fa">
            <li
              className="list-fa-item times"
              onClick={() => changeItem(todo.id)}
            >
              <FaTimes />
            </li>
            <li
              className="list-fa-item change"
              onClick={() => changeClickLabel(todo.id)}
            >
              <FaExchangeAlt />
            </li>
          </ul>
        </div>
      ) : null}
      {todo.label === "" ? (
        <p className="alert">
          <FaInfoCircle /> <span>Enter text in the field</span>
        </p>
      ) : null}
    </li>
  ));

  return (
    <div className="todo-list">
      <ul className="list">{elements}</ul>
    </div>
  );
};

export default AppTodoList;
