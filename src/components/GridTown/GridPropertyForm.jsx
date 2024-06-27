"use client";

import { atom, useAtom } from "jotai";

import { handleItemPropOnChange } from "../../formActions";
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
              Columns
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
              Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
        </div>

        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Columns
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Columns
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Columns
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
        </div>
        <div className="input-siblings flex flex-col gap-2">
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Columns
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
          <div className="flex gap-3">
            <label className="font-medium" htmlFor="">
              Rows
            </label>
            <input
              type="text"
              className="px-2 font-normal w-full bg-slate-200 "
            />
          </div>
        </div>
      </div>
    </form>
  );
}
