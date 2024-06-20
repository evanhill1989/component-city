import InputBox from "../InputBox";

import React from "react";

const itemInputs = [
  {
    id: "alignSelf",
    labelText: "Align Self",
    name: "alignSelf",
    placeholder: "default",
  },
  {
    id: "justifySelf",
    labelText: "Justify Self",
    name: "justifySelf",
    placeholder: "default",
  },
];

// This probably just needs to accept children so InputBox can
// go directly in parent environ
export default function ItemPropertyForm({
  gridItemNumber,
  gridItemStyles,
  handleItemPropOnChange,
}) {
  const { gridItems } = gridItemNumber;

  const gridItemsArr = [];

  // loop over number of gridItems in state and push human numbers
  for (let i = 0; i < gridItems; i++) {
    gridItemsArr.push(i + 1);
  }

  return (
    <>
      {gridItemsArr.map((item) => (
        <div key={item}>
          <p>Grid Item {item}</p>
          <form
            // Left off here, need to try onChangFn first to
            // effect gridItems props
            // need to prepare gridItem props to accept these styles first in main state

            className="badge-creator-inputs p-6 grid grid-flow-row grid-cols-2 gap-4 text-sm"
          >
            <label className="flex gap-3 font-medium" htmlFor="borderRadius">
              Align Self
              <input
                type="text"
                className="px-2 font-normal bg-slate-100 border border-black"
                onChange={(event) => handleItemPropOnChange(event)}
                name="alignSelf"
                id={item}
                placeholder="default"
              />
            </label>
            <label className="flex gap-3 font-medium" htmlFor="borderRadius">
              Justify Self
              <input
                type="text"
                className="px-2 font-normal bg-slate-100 border border-black"
                onChange={(event) => handleItemPropOnChange(event)}
                name="justifySelf"
                id={item}
                placeholder="default"
              />
            </label>
            {/* {itemInputs.map((item) => (
              <InputBox
                key={item.id}
                labelText={item.labelText}
                name={item.name}
                id={item.id}
                placeholder={item.placeholder}
                onChangeFn={handleItemPropOnChange}
              />
            ))} */}

            <button>Submit new styles</button>
          </form>
        </div>
      ))}
    </>
  );
}
