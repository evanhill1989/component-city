"use client";

import React, { forwardRef } from "react";
import { atom, useAtom } from "jotai";
// import styled from "styled-components";
import { gridItemsAtom } from "../../atoms/gridAtoms";

const Grid = forwardRef(({ gridStyle }, ref) => {
  const [gridItems, setGridItems] = useAtom(gridItemsAtom);

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

  return (
    <div
      className="grid border h-full w-full border-red-400"
      style={gridStyleObject}
      ref={ref}
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
});

Grid.displayName = "Grid";

export default Grid;
