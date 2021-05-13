import React from "react";

import "./AppHeader.css";

const AppHeader = (props) => {

  const { title } = props;

  return (
    <div className="app-header">
      <p className="title">{title}</p>
      <p className="description">1 more todo, 3 done</p>
    </div>
  );
};

export default AppHeader;
