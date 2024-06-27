"use client";

import { atom, useAtom } from "jotai";

export default function GridPropertyForm({ handleItemPropOnChange }) {
  //TODO using this in 2 places now in ItemPropertyForm.jsx too

  return (
    <form
      className="grid col-start-1 col-end-2 row-start-2 row-end-3 gap-y-4"
      action=""
    >
      <div className="flex flex-col gap-6 justify-between">
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
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
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Grid Template Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="gridTemplateRows"
            />
          </div>
        </div>

        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
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
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Align Items
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="alignItems"
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Justify Content
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="justifyContent"
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Align Content
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="alignContent"
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Column Gap
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="columnGap"
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Row Gap
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="rowGap"
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Auto-Flow
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="gridAutoFlow"
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Background Color
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
              onChange={(event) => handleItemPropOnChange(event)}
              name="backgroundColor"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
