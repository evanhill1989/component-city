import React from "react";
import Grid from "./GridTown/Grid";

export default function Main({ children }) {
  return (
    <main className="grid grid-cols-5 col-gap-5 items-center max-w-7xl m-auto">
      <div className="bg-zinc-900 grid col-span-5 grid-cols-subgrid gap-x-12 p-0 mb-0">
        <h2 className="text-white table-cell text-4xl align-text-bottom italic  col-start-2 col-end-3 self-end pt-5 mb-[-7px] font-thin">
          Grid
        </h2>
      </div>
      <div className="component grid grid-cols-subgrid col-span-5 max-w-5xl gap-x-12 md:grid-rows-[100px_1fr_100px]">
        <div className="input-aside grid col-start-1 col-end-2 grid-cols-subgrid md:row-start-2 md:row-end-3 p-6 text-sm ">
          <form className="grid col-start-1 col-end-2  gap-y-4" action="">
            <div className="flex flex-col gap-10 justify-between">
              <div className="input-siblings flex flex-col gap-4">
                <div className="flex gap-3">
                  <label className="font-medium " htmlFor="">
                    Columns
                  </label>
                  <input
                    type="text"
                    className="px-2 font-normal w-full bg-slate-200 self-end"
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

              <div className="input-siblings flex flex-col gap-4">
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
              <div className="input-siblings flex flex-col gap-4">
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
              <div className="input-siblings flex flex-col gap-4">
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
              <div className="input-siblings flex flex-col gap-4">
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
        </div>
        <div className="component-rendered col-start-2 col-end-5 grid-cols-subgrid md:row-start-2 md:row-end-3">
          <Grid />
        </div>
      </div>
    </main>
  );
}
