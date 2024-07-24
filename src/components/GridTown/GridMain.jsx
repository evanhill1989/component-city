"use client";

import React, { useRef, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import Grid from "./Grid";
import GridTrackingLines from "./OLDGridTrackingLines";
import GridPropertyForm from "./GridPropertyForm";

import { gridStyleAtom } from "../../atoms/gridAtoms";

function GridMain({ children }) {
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
    <>
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
    </>
  );
}

export default GridMain;
