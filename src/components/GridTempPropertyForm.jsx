"use client";

import { atom, useAtom } from "jotai";
import { gridStyleAtom } from "../atoms/gridAtoms";

export default function GridTempPropertyForm() {
  //TODO using this in 2 places now in ItemPropertyForm.jsx too

  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);

  function handleItemPropOnChange(event) {
    event.preventDefault();
    const { name, id, value } = event.target;
    setGridStyle((prevGridStyle) => ({ ...prevGridStyle, [name]: value }));
  }

  return (
    <div className="input-container h-[250px] grid grid-cols-1 grid-rows-[2rem, 1fr]">
      <div className="input-tabs grid grid-cols-2">
        <div className="bg-slate-100 p-2">
          <h4>Container Settings</h4>
        </div>
        <div className="bg-slate-400 p-2">
          <h4>Item Settings</h4>
        </div>
      </div>

      <form className="inputs chartreuse p-6 grid grid-rows-5 gap-8" action="">
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Grid Template Columns
          </label>
          <input
            name="gridTemplateColumns"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Grid Template Rows
          </label>
          <input
            name="gridTemplateRows"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Justify Items
          </label>
          <input
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
            name="justifyItems"
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Align Items
          </label>
          <input
            name="alignItems"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Justify Content
          </label>
          <input
            name="justifyContent"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Align Content
          </label>
          <input
            name="alignContent"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Column Gap
          </label>
          <input
            name="columnGap"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Row Gap
          </label>
          <input
            name="rowGap"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Auto-Flow
          </label>
          <input
            name="gridAutoFlow"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
        <div className="input-box flex ">
          <label className="font-medium" htmlFor="">
            Background Color
          </label>
          <input
            name="backgroundColor"
            type="text"
            className="px-2 font-normal w-full bg-slate-200 "
            onChange={(event) => handleItemPropOnChange(event)}
          />
        </div>
      </form>
    </div>
  );
}
