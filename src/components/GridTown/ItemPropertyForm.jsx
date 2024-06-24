"use client";
import React from "react";
import { atom, useAtom } from "jotai";

import { gridItemsAtom } from "../../atoms/gridAtoms";

// This probably just needs to accept children so InputBox can
// go directly in parent environ
// TODO : I probably need to pass this function as a prop or import from actions repo
export default function ItemPropertyForm() {
  const [gridItems, setGridItems] = useAtom(gridItemsAtom);

  function handleItemPropOnChange(event) {
    event.preventDefault();
    const { name, id, value } = event.target;
    const updatedItems = gridItems.map((item) =>
      item.id === parseInt(id) ? { ...item, [name]: value } : item
    );
    setGridItems(updatedItems);
  }

  return (
    <>
      {gridItems.map((item) => (
        <div key={item.id}>
          <p>Grid Item {item.id}</p>
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
                id={item.id.toString()}
                placeholder={item.alignSelf}
              />
            </label>
            <label className="flex gap-3 font-medium" htmlFor="borderRadius">
              Justify Self
              <input
                type="text"
                className="px-2 font-normal bg-slate-100 border border-black"
                onChange={(event) => handleItemPropOnChange(event)}
                name="justifySelf"
                id={item.id.toString()}
                placeholder="default"
              />
            </label>

            <button>Submit new styles</button>
          </form>
        </div>
      ))}
    </>
  );
}
