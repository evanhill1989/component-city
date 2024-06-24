import React from "react";

function GridTownForm({ handleGridSubmit }) {
  return (
    <>
      <form
        onSubmit={(event) => handleGridSubmit(event)}
        className="badge-creator-inputs p-6 grid grid-flow-row grid-cols-2 gap-4 text-sm"
      >
        {/* <label className="flex gap-3 font-medium" htmlFor="gridItems">
          Number of grid items
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="gridItems"
            id="gridItems"
            placeholder=""
          />
        </label> */}

        <label className="flex gap-3 font-medium" htmlFor="gridTemplateColumns">
          Grid Template Columns
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="gridTemplateColumns"
            id="gridTemplateColumns"
            placeholder=""
          />
        </label>
        <label className="flex gap-3 font-medium" htmlFor="gridTemplateRows">
          Grid Template Rows
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="gridTemplateRows"
            id="gridTemplateRows"
            placeholder=""
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="gridGap">
          Grid Gap
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="gridGap"
            id="gridGap"
            placeholder=""
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="justifyItems">
          Justify Items
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="justifyItems"
            id="justifyItems"
            placeholder=""
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="alignItems">
          Align Items
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="alignItems"
            id="alignItems"
            placeholder=""
          />
        </label>

        <label className="flex gap-3 font-medium" htmlFor="backgroundColor">
          Background Color
          <input
            type="text"
            className="px-2 font-normal bg-slate-100 border border-black"
            // onChange={(event) => handleAdvancedChange(event)}
            name="backgroundColor"
            id="backgroundColor"
            placeholder=""
          />
        </label>

        <button>Grid Submit</button>
      </form>
    </>
  );
}

export default GridTownForm;
