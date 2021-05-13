import React from "react";

import "./AppSearchPanel.css";

const AppSearchPanel = (props) => {
  const { value, enterLabelSearch, filter, filterItem } = props;

  const buttonData = [
    {
      name: "all",
      label: "All",
    },
    {
      name: "active",
      label: "Active",
    },
    {
      name: "done",
      label: "Done",
    },
  ];

  const buttons = buttonData.map((button) =>
    button.name === filter ? (
      <button
        key={button.name}
        className={`btn btn-${button.name} active`}
        onClick={() => filterItem(button.name)}
      >
        {button.label}
      </button>
    ) : (
      <button
        key={button.name}
        className={`btn btn-${button.name}`}
        onClick={() => filterItem(button.name)}
      >
        {button.label}
      </button>
    )
  );

  return (
    <div className="app-search-panel">
      <input
        className="input-search"
        type="text"
        value={value}
        onChange={enterLabelSearch}
        placeholder="Search..."
      />
      <div className="group-button">{buttons}</div>
    </div>
  );
};

export default AppSearchPanel;
