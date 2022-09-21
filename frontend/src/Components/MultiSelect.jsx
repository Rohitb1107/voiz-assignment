import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./MultiSelect.css";

export const MultiSelects = () => {
  const [values, setValues] = useState([]);

  const allOptions = {
    options: [
      { name: "Item no. default", id: 1 },
      { name: "Item no. 2", id: 3 },
      { name: "Item no. 3", id: 4 },
      { name: "Item no. 4", id: 5 },
      { name: "Item no. 5", id: 6 },
      { name: "Item no. 6", id: 7 },
      { name: "Item no. 7", id: 8 },
      { name: "Item no. 8", id: 9 },
      { name: "Item no. 9", id: 10 },
      { name: "Item no. 10", id: 11 },
      { name: "Item no. 11", id: 12 },
      { name: "Item no. 12", id: 13 },
      { name: "Item no. 13", id: 14 },
      { name: "Item no. 14", id: 15 },
    ],
  };

  function onSelectValue(value) {
    setValues(value);
    console.log(values, "values");
  }

  function onRemoveValue(value) {
    setValues(value);
    console.log(values, "values");
  }

  return (
    <>
      <div className="multi-select-container">
        <div>
          <h1>MultiSelect</h1>
          <Multiselect
            options={allOptions.options}
            onSelect={onSelectValue}
            onRemove={onRemoveValue}
            displayValue="name"
          />
        </div>
      </div>
    </>
  );
};
