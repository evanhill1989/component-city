"use client";

import React, { useEffect, useState } from "react";

import Hero from "./UI/Hero";
import GridTemp from "./GridTemp";
import GridTempPropertyForm from "./GridTempPropertyForm";
import GridTrackingLines from "./GridTrackingLines";

import { atom, useAtom } from "jotai";

function TempMain() {
  //  Handles collecting gridStyle data after main Grid renders.
  //   I can't remember why I couldn't take it directly from gridStyle?
  // I recall that somehow the timing was always off, like
  // it wasn't ever matching after the render cycles, but I don't get it now.
  //I haven't figured it out yet so I'm just going to do the intuitive thing
  // and just build two Grid elements and just style the grid lines...
  // but now that I'm envisioning that I'm starting to see the problem...
  // The tracking lines can't be influenced by item positioning vars
  // You need the parent grid with it's custom visual render, and also a grid that is
  // based on the default visual render, so if it uses the same gridStyles as they are customized,
  //then we lose it's default grid tracking lines representation.
  // Can we just tap gridStyle for what we need without what we don't?
  // 1. base a gridTrackingStyle Atom off of gridStyle Atom
  // 2. Compute the necessary format functionally based on gridStyle ...
  //Either makes sense right? gridStyle will still have the basic info we need regardless
  // of user customizations, wont it?

  return (
    <main>
      <Hero />
      {/* GRID INPUT SECTION */}
      <GridTempPropertyForm />

      {/*END GRID INPUT SECTION */}
      {/* ACTUAL GRID */}
      <div className="rendered-grid-container w-full h-[35vh] relative bg-slate-300 ">
        <GridTemp />
        {/* <div className="rendered-grid border border-pink-500 border-dashed h-full w-full grid grid-cols-3 grid-rows-3">
          <div className="border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
          <div className="rendered-grid border border-pink-500 border-dashed"></div>
        </div> */}
        <GridTrackingLines />
      </div>
      {/*End ACTUAL GRID */}
      {/* GRID TRACKING LINES*/}

      {/*END GRID TRACKING LINES*/}
    </main>
  );
}

export default TempMain;
