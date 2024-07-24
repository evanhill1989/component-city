"use client";
import { useRef, useEffect } from "react";
import { atom, useAtom } from "jotai";
// import styled from "styled-components";
import {
  gridItemsAtom,
  gridStyleAtom,
  gridItemNumberAtom,
} from "../atoms/gridAtoms";

function GridTemp() {
  // originally i was passing gridStyle as a child, but I'm not sure why?
  // Maybe I was thinking state needed to be in parent components, but
  // the point of state mgmt is to pre empt this need, right ?
  // NEXT STEP !!! Begin connecting to Input changes
  // Should already be set up for that here, need a new component that handles logic for the form .
  // Can be based off of GridPropertyForm

  const [gridItems, setGridItems] = useAtom(gridItemsAtom);
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);
  const [gridItemNumber, setGridItemNumber] = useAtom(gridItemNumberAtom);
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

      setGridItemNumber(columnCount * rowCount);
    }
  }, [gridStyle, setGridItemNumber, gridItemNumber]);

  // dummy useEffect below for tuning the useEfect above
  // useEffect(() => {
  //   console.log("useEffect running"); // Simple log to verify useEffect runs
  //   // Here, we're not accessing the DOM to keep it simple
  //   setGridItemNumber(0); // Example state update
  // }, [setGridItemNumber]); // Dependency array includes only necessary state setters

  const {
    gridTemplateColumns,
    gridTemplateRows,
    columnGap,
    rowGap,
    justifyItems,
    alignItems,
    gridAutoFlow,
    backgroundColor,
  } = gridStyle;

  const gridStyleObject = {
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    rowGap: rowGap,
    columnGap: columnGap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    gridAutoFlow: gridAutoFlow,
    backgroundColor: backgroundColor,
  };

  return (
    <div
      className="grid border h-full w-full border-red-400 m-0 p-0"
      style={gridStyleObject}
      ref={gridRef}
    >
      {gridItems.map((item) => (
        <div
          className="border-solid border-orange-500 border-2"
          key={item.id}
          style={{
            justifySelf: item.justifySelf,
            backgroundColor: item.backgroundColor,
          }}
        >
          <p className="col-auto row-auto">GridItem</p>
        </div>
      ))}
    </div>
  );
}

export default GridTemp;
