import React from "react";

import "./AppAddItemPanel.css";

const AppAddItemPanel = (props) => {
  const { addItemValue, addLabelItem } = props;

  return (
    <form className="app-add-item-panel">
      <input
        className="input-forn-add-item"
        type="text"
        placeholder="Enter new item..."
        value={addItemValue}
        onChange={addLabelItem}
      />
      <input className="btn-forn-add-item" type="submit" value="Add Item" />
    </form>
  );
};

export default AppAddItemPanel;
