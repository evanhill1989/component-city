"use client";

import { atom, useAtom } from "jotai";
// import styled from "styled-components";
import { gridItemsAtom, gridStyleAtom } from "../atoms/gridAtoms";

function GridTemp() {
  // originally i was passing gridStyle as a child, but I'm not sure why?
  // Maybe I was thinking state needed to be in parent components, but
  // the point of state mgmt is to pre empt this need, right ?
  // NEXT STEP !!! Begin connecting to Input changes
  // Should already be set up for that here, need a new component that handles logic for the form .
  // Can be based off of GridPropertyForm

  const [gridItems, setGridItems] = useAtom(gridItemsAtom);
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);

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
      className="grid border h-full w-full border-red-400"
      style={gridStyleObject}
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
