import React from "react";

import "./AppHeader.css";

const AppHeader = (props) => {
  const { title, done, notDone } = props;

  return (
    <div className="app-header">
      <p className="title">{title}</p>
      <p className="description">
        {notDone} more todo, {done} done
      </p>
    </div>
  );
};

export default AppHeader;
