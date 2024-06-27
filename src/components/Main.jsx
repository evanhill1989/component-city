"use client";

import React from "react";

import GridPropertyForm from "./GridTown/GridPropertyForm";
import { atom, useAtom } from "jotai";
import { gridStyleAtom } from "../atoms/gridAtoms";
import DynamicGridElement from "./GridTown/DynamicGridElement";

// List of components
// Nav -- Header -- ToastMessage -- Portal -- Drawer -- Auth Forms -- Dialog/Modal -- Card --

export default function Main({ children }) {
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);

  //   const gridStyleAtom = atom({
  //     gridTemplateColumns: "repeat(3, 1fr)",
  //     gridTemplateRows: "",
  //     gridGap: "50px",
  //     justifyItems: "",
  //     alignItems: "",
  //     backgroundColor: "",
  //   });

  function handleItemPropOnChange(event) {
    event.preventDefault();
    console.log("Inside Handle ItemProponCHange in GridPropertyForm");
    console.log(gridStyle, "gridStyle");
    const { name, id, value } = event.target;
    console.log(event.target);
    console.log(name, "Value is ...");
    // const updatedStyles = gridStyle.map((style) =>
    //   item.id === parseInt(id) ? { ...style, [name]: value } : style
    // );
    setGridStyle((prevGridStyle) => ({ ...prevGridStyle, [name]: value }));
    console.log(gridStyle, "gridStyle 2");
  }
  return (
    <main className="grid grid-cols-5 items-center">
      <div className="bg-zinc-900 w-full grid col-span-5 grid-cols-subgrid ">
        <h2 className="text-white grid col-start-2 col-end-3">Grid</h2>
      </div>
      <div className="component grid grid-cols-subgrid">
        <div className="input-aside grid col-start-1 col-end-2 grid-cols-subgrid md:grid-rows-[100px_1fr_100px] p-6">
          <GridPropertyForm handleItemPropOnChange={handleItemPropOnChange} />
        </div>
        <div className="component-rendered col-start-2 col-end-5">
          <DynamicGridElement />
        </div>
      </div>
    </main>
  );
}
