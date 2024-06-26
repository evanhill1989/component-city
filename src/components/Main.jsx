"use client";

import React, { useRef, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import Grid from "./GridTown/Grid";
import GridTrackingLines from "./GridTown/GridTrackingLines";
import GridPropertyForm from "./GridTown/GridPropertyForm";

import { gridStyleAtom } from "../atoms/gridAtoms";

//TODO need to import this probz

export default function Main({ children }) {
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);
  const [gridDimensions, setGridDimensions] = useState({
    columnCount: 0,
    rowCount: 0,
  });
  const gridRef = useRef(null);

  useEffect(() => {
    const gridElement = gridRef.current;

    if (gridElement) {
      // Use Grid Layout API to get grid layout information
      // Computing actual grid and columns from the browser window data
      // using this data to create the second overlay grid to simulate grid tracks
      const columnString =
        window.getComputedStyle(gridElement).gridTemplateColumns;
      const columnCount = columnString.trim().split(/\s+/).length;

      const rowString = window.getComputedStyle(gridElement).gridTemplateRows;
      const rowCount = rowString.trim().split(/\s+/).length;
      console.log(
        columnCount,
        rowCount,
        "Column count and RowCount in useEffect!"
      );
      console.log("useEffect running !!!!");
      setGridDimensions({ columnCount, rowCount });
    }
  }, [gridStyle]);

  console.log("gridDimensions in Main.jsx after the uE:", gridDimensions);
  function handleItemPropOnChange(event) {
    event.preventDefault();
    const { name, id, value } = event.target;
    setGridStyle((prevGridStyle) => ({ ...prevGridStyle, [name]: value }));
  }

  return (
    <main className="grid grid-cols-5 col-gap-5 items-center max-w-7xl m-auto">
      <div className="bg-zinc-900 grid col-span-5 grid-cols-subgrid gap-x-12 p-0 mb-0">
        <h2 className="text-white table-cell text-4xl align-text-bottom italic  col-start-2 col-end-3 self-end pt-5 mb-[-7px] font-thin">
          Grid
        </h2>
      </div>
      <div className="component grid grid-cols-subgrid col-span-5 max-w-5xl gap-x-12 md:grid-rows-[100px_1fr_100px]">
        <div className="input-aside grid col-start-1 col-end-2 grid-cols-subgrid md:row-start-2 md:row-end-3 p-6 text-sm ">
          <GridPropertyForm handleItemPropOnChange={handleItemPropOnChange} />
        </div>
        <div className="component-rendered col-start-2 col-end-5 grid-cols-subgrid md:row-start-2 md:row-end-3 relative">
          <Grid gridStyle={gridStyle} ref={gridRef} />

          <GridTrackingLines
            gridStyle={gridStyle}
            columns={gridDimensions.columnCount}
            rows={gridDimensions.rowCount}
          />
        </div>
      </div>
    </main>
  );
}
