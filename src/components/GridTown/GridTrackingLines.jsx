"use client";

import React from "react";
import { atom, useAtom } from "jotai";

export default function GridTrackingLines({ gridStyle, columns, rows }) {
  const {
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
    justifyItems,
    alignItems,
    gridAutoFlow,
    backgroundColor,
  } = gridStyle;

  const gridStyleObject = {
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    gridGap: gridGap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    gridAutoFlow: gridAutoFlow,
    backgroundColor: backgroundColor,
  };
  console.log("GridTrackingLines RUNNING NOW!");
  console.log(columns, rows, "Columns and ROWS");
  const gridTrackNumber = Number(columns) * Number(rows);
  // console.log("GRID TRACK NUMBER COMPUTED", gridTrackNumber);
  const gridTrackItems = [];

  for (let i = 0; i < gridTrackNumber; i++) {
    gridTrackItems.push({
      id: i,
    });
  }

  return (
    <div
      className="grid border absolute top-0 left-0 h-full w-full border-green-500 justify-items-stretch "
      style={gridStyleObject}
    >
      {gridTrackItems.map((item) => (
        <div
          className="border-dotted h-full w-full border-pink-600-500 border-2"
          key={item.id}
          style={{
            gridColumn: "span 1",
            gridRow: "span 1",
            height: "100%",
            width: "100%",
          }}
        >
          <p className="col-auto row-auto"></p>
        </div>
      ))}
    </div>
  );
}
