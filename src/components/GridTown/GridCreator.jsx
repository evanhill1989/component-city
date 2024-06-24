"use client";

import { useState } from "react";
import { atom, useAtom } from "jotai";

import Grid from "./Grid";
import GridTownForm from "./GridTownForm";
import GridItemNumberForm from "./GridItemNumberForm";
import ItemPropertyForm from "./ItemPropertyForm";
import {
  gridStyleAtom,
  gridItemsAtom,
  gridItemNumberAtom,
} from "../../atoms/gridAtoms";

export default function GridCreator({ children }) {
  const [gridItems, setGridItems] = useAtom(gridItemsAtom);
  const [gridStyles, setGridStyles] = useAtom(gridStyleAtom);
  // oof so i need to figure out how to set a state that's a dynamic array
  // whose length is based on another piece of state
  // feels like this is where a custom hook would go

  // setting the state might be simple enough, but referencing it is awkward i think
  // I'll have to research how to work with state arrays, or create a separate piece of state for every property
  // in the gridItem styles

  function handleGridItemSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const gridItemNumber = formData.get("gridItems");
    const updatedItemsArr = [];
    for (let i = 0; i <= gridItemNumber; i++) {
      updatedItemsArr.push({
        id: i,
        alignSelf: "default",
        justifySelf: "default",
        backgroundColor: "gray",
      });
    }

    setGridItems(updatedItemsArr);
  }
  function handleGridSubmit(event) {
    event.preventDefault();
    console.log("Inside handle Grid submit");
    const formData = new FormData(event.target);
    // console.log(formData);

    const gridTemplateColumns = formData.get("gridTemplateColumns");
    const gridTemplateRows = formData.get("gridTemplateRows");
    const gridGap = formData.get("gridGap");
    const justifyItems = formData.get("justifyItems");
    const alignItems = formData.get("alignItems");
    const backgroundColor = formData.get("backgroundColor");

    setGridStyles({
      gridTemplateColumns,
      gridTemplateRows,
      gridGap,
      justifyItems,
      alignItems,
      backgroundColor,
    });
  }

  return (
    <div>
      {children}
      <GridItemNumberForm handleGridItemSubmit={handleGridItemSubmit} />
      <ItemPropertyForm />
      <GridTownForm handleGridSubmit={handleGridSubmit} />
      <Grid gridStyles={gridStyles} />
    </div>
  );
}
