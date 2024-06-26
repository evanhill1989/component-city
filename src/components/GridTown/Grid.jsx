"use client";

import React from "react";
import { atom, useAtom } from "jotai";
import { gridItemsAtom, gridStyleAtom } from "../../atoms/gridAtoms";

export default function Grid(
  {
    // gridStyles = {
    //   gridTemplateColumns: "repeat(3, 1fr)",
    //   gridTemplateRows: "",
    //   gridGap: "10px",
    //   justifyItems: "",
    //   alignItems: "",
    //   backgroundColor: "",
    // },
  }
) {
  const [gridItems, setGridItems] = useAtom(gridItemsAtom);
  const [gridStyles, setGridStyles] = useAtom(gridStyleAtom);
  const {
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
    justifyItems,
    alignItems,
    backgroundColor,
  } = gridStyles;

  // const { gridItems } = gridItemNumber;

  const gridStyleObject = {
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    gridGap: gridGap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    backgroundColor: backgroundColor,
  };

  // can't get backggroundColor working !!!!!q

  return (
    <>
      <h5>sandbox</h5>
      <div className="grid border border-red-400" style={gridStyleObject}>
        {gridItems.map((item) => (
          <div
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
    </>
  );
}
