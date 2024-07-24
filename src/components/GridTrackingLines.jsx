"use client";

import React from "react";
import { atom, useAtom } from "jotai";
import {
  gridItemsAtom,
  gridStyleAtom,
  gridItemNumberAtom,
} from "../atoms/gridAtoms";

export default function GridTrackingLines() {
  const [gridItemNumber, setGridItemNumber] = useAtom(gridItemNumberAtom);
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
    columnGap: columnGap,
    rowGap: rowGap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    gridAutoFlow: gridAutoFlow,
    backgroundColor: backgroundColor,
  };

  //** current notes/Bugs
  // My tracking line system doesn't account for rowGaps and columnGaps
  // not a huge problem - it's still effective in showing the default stretch properties
  // of the items, but it no longer really passes as "grid tracking lines" visually.

  // old Notes/Bugs ----> \/
  // originally i was passing gridStyle as a child, but I'm not sure why?
  // Maybe I was thinking state needed to be in parent components, but
  // the point of state mgmt is to pre empt this need, right ?
  // NEXT STEP !!! Begin connecting to Input changes
  // Should already be set up for that here, need a new component that handles logic for the form .
  // Can be based off of GridPropertyForm

  // convert gridTemplateColumns and gridTemplateRows to -- !!*** oh here's why the above child
  // weirdness and why i wasn't pulling my tracking lines right from the gridStyle state
  // I'm accepting all sorts of user inputted css and was thinking that wouldn't reduce down easily
  // to just the number that I need for my tracking lines BUT now that i think about it
  // why do my tracking lines need to be boiled down to just a number instead of the actuall CSS
  // that is used to build out the grid parent for the items in the UI?

  // ok now i sort of see - I needed simple numbs so i could use basic multiplication to dynamically
  //compute the number of grid items... but again i still don't see why i can't use the universal gridStyle
  // ok it's because the # of Items is entirely separate from # of grid cells, and as far as i know you can't
  // directly style or represent grid tracking lines in a browser, so the solution was to render a second grid
  // right on top of the first that contains the exact # of items for the # of templated cells(items which are
  // filling up the entire size of their parent cell so it creates this synthetic grid line effect because they
  // are styled with transparent backgrounds and dashed borders)
  // but also what happens when I have implicit cells? Will that even solve for those? *TO-DO
  //
  // Ok since the original solution(below) involved this kind of funky regex work inside a useEffect
  // why not just apply some even more convoluted regex directly to gridStyle states to compute
  // down to simple gridItems number? It might be a good tradeoff to make the logic a little more complex
  // if i can dump the useEffect and useRef. It really can't be that much more complicated.
  // It's not like the potential functional user CSS inputs are infinite
  // What we need to handle for:
  // Anything in between commas counts as 1
  // If we use a "repeat" just take the first #
  // Hmm might need to keep implicit items top of mind ...
  // ok i just need to dive into the regex solution and see what happens.

  console.log("GridTrackingLines RUNNING NOW!");

  // console.log("GRID TRACK NUMBER COMPUTED", gridTrackNumber);
  const gridTrackItems = [];

  for (let i = 0; i < gridItemNumber; i++) {
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
