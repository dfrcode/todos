import React from "react";

import "./AppTodoList.css";

import { FaTrashAlt, FaExclamation } from "react-icons/fa";

const AppTodoList = () => {
  return (
    <div className="todo-list">
      <ul className="list">
        <li className="list-item done">
          <span className="item-label">Learn HTML5</span>
          <ul className="list-fa">
            <li className="list-fa-item trash">
              <FaTrashAlt />
            </li>
            <li className="list-fa-item important">
              <FaExclamation />
            </li>
          </ul>
        </li>
        <li className="list-item important">
        <span className="item-label">Learn CSS3</span>
          <ul className="list-fa">
            <li className="list-fa-item trash">
              <FaTrashAlt />
            </li>
            <li className="list-fa-item important">
              <FaExclamation />
            </li>
          </ul>
        </li>
        <li className="list-item">
        <span className="item-label">Learn JavaScript</span>
          <ul className="list-fa">
            <li className="list-fa-item trash">
              <FaTrashAlt />
            </li>
            <li className="list-fa-item important">
              <FaExclamation />
            </li>
          </ul>
        </li>
        <li className="list-item">
        <span className="item-label">Learn React</span>
          <ul className="list-fa">
            <li className="list-fa-item trash">
              <FaTrashAlt />
            </li>
            <li className="list-fa-item important">
              <FaExclamation />
            </li>
          </ul>
        </li>
        <li className="list-item">
        <span className="item-label">Learn Redux</span>
          <ul className="list-fa">
            <li className="list-fa-item trash">
              <FaTrashAlt />
            </li>
            <li className="list-fa-item important">
              <FaExclamation />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AppTodoList;
