"use client";

import { atom, useAtom } from "jotai";
// import styled from "styled-components";
import { gridItemsAtom, gridStyleAtom } from "../../atoms/gridAtoms";

function GridTemp() {
  // originally i was passing gridStyle as a child, but I'm not sure why?
  // Maybe I was thinking state needed to be in parent components, but
  // the point of state mgmt is to pre empt this need, right ?

  const [gridItems, setGridItems] = useAtom(gridItemsAtom);
  const [gridStyle, setGridStyle] = useAtom(gridStyleAtom);

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
