import React from "react";

export default function Input({ labelText, name, id }) {
  return (
    <>
      <label className="flex gap-3 font-medium" htmlFor="gridItems">
        {labelText}
        <input
          type="text"
          className="px-2 font-normal bg-slate-100 border border-black"
          // onChange={(event) => handleAdvancedChange(event)}
          name={name}
          id={id}
          placeholder=""
        />
      </label>
    </>
  );
}
