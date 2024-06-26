import React from "react";

export default function Main({ children }) {
  return (
    <main className="grid grid-cols-5 items-center">
      <div className="bg-zinc-900 w-full grid col-span-5 grid-cols-subgrid ">
        <h2 className="text-white grid col-start-2 col-end-3">Grid</h2>
      </div>
      <div className="component grid grid-cols-subgrid">
        <div className="input-aside grid col-start-1 col-end-2 grid-cols-subgrid md:grid-rows-[100px_1fr_100px] p-6">
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
        </div>
        <div className="component-rendered col-start-2 col-end-5"></div>
      </div>
    </main>
  );
}
