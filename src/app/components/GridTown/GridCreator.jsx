"use client";

import { useState } from "react";
import Grid from "./Grid";
import GridTownForm from "./GridTownForm";
import GridItemNumberForm from "./GridItemNumberForm";
import ItemPropertyForm from "./ItemPropertyForm";

export default function GridCreator({ children }) {
  const [gridStyles, setGridStyles] = useState({
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "",
    gridGap: "10px",
    justifyItems: "",
    alignItems: "",
    backgroundColor: "",
  });

  const [gridItemNumber, setGridItemNumber] = useState({
    gridItems: "3",
  });

  // oof so i need to figure out how to set a state that's a dynamic array
  // whose length is based on another piece of state
  // feels like this is where a custom hook would go
  const [gridItemStyles, setGridItemStyles] = useState([
    {
      alignSelf: "default",
      justifySelf: "default",
    },
    {
      alignSelf: "default",
      justifySelf: "default",
    },
    {
      alignSelf: "default",
      justifySelf: "default",
    },
  ]);

  // setting the state might be simple enough, but referencing it is awkward i think
  // I'll have to research how to work with state arrays, or create a separate piece of state for every property
  // in the gridItem styles
  function handleItemPropOnChange(event) {
    event.preventDefault();
    const name = event.target.name;
    const id = event.target.id;
    const value = event.target.value;
    console.log(id, name, value, "id, name and value");

    setGridItemStyles((prevStyles) => (prevStyles.slice(1, 3){
      alignSelf: value,
      justifySelf:value
    }));
  }
  function handleGridItemSubmit(event) {
    event.preventDefault();
    console.log("Inside handle Grid submit");
    const formData = new FormData(event.target);
    // console.log(formData);

    const gridItems = formData.get("gridItems");
    setGridItemNumber({
      gridItems,
    });
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

  console.log(gridItemStyles, "Grid Item Styles");
  return (
    <div>
      {children}
      <GridItemNumberForm handleGridItemSubmit={handleGridItemSubmit} />
      <ItemPropertyForm
        gridItemNumber={gridItemNumber}
        gridItemStyles={gridItemStyles}
        handleItemPropOnChange={handleItemPropOnChange}
      />
      <GridTownForm handleGridSubmit={handleGridSubmit} />
      <Grid
        gridItemStyles={gridItemStyles}
        gridItemNumber={gridItemNumber}
        gridStyles={gridStyles}
      />
    </div>
  );
}
