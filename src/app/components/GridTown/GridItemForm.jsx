import React from "react";
import Input from "../Input";

export default function GridItemForm({
  handleGridItemSubmit,
  gridItemStyles = { gridItems: "3" },
}) {
  const { gridItems } = gridItemStyles;
  return (
    <>
      <form
        onSubmit={(event) => handleGridItemSubmit(event)}
        className="badge-creator-inputs p-6 grid grid-flow-row grid-cols-2 gap-4 text-sm"
      >
        <label className="flex gap-3 font-medium" htmlFor="gridItems">
          Number of grid items
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="gridItems"
            id="gridItems"
            placeholder=""
          />
        </label>
        {Array.from({ length: gridItems }, (_, i) => (
          <div key={i}>
            <Input
              labelText={`Grid Item ${i}`}
              id={`gridItem${i}`}
              name={`gridItem${i}`}
            />
          </div>
        ))}

        <button>Grid Item Submit</button>
      </form>
    </>
  );
}
