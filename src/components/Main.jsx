"use client";

import React, { useRef, useEffect, useState } from "react";
import { atom, useAtom } from "jotai";

import Grid from "./GridTown/Grid";
import GridTrackingLines from "./GridTown/GridTrackingLines";
import GridPropertyForm from "./GridTown/GridPropertyForm";
import GridMain from "./GridTown/GridMain";
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
      {children}
    </main>
  );
}
