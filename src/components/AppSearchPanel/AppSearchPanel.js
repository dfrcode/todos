import React from "react";

import "./AppSearchPanel.css";

const AppSearchPanel = (props) => {
  const { value, enterLabelSearch } = props;

  return (
    <div className="app-search-panel">
      <input
        className="input-search"
        type="text"
        value={value}
        onChange={enterLabelSearch}
        placeholder="Search..."
      />
      <div className="group-button">
        <button className="btn btn-all active">All</button>
        <button className="btn btn-active">Active</button>
        <button className="btn btn-done">Done</button>
      </div>
    </div>
  );
};

export default AppSearchPanel;
