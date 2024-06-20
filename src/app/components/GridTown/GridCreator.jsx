"use client";

import { useState } from "react";
import Grid from "./Grid";
import GridTownForm from "./GridTownForm";
import GridItemForm from "./GridItemForm";

export default function GridCreator({ children }) {
  const [gridStyles, setGridStyles] = useState({
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "",
    gridGap: "10px",
    justifyItems: "",
    alignItems: "",
    backgroundColor: "",
  });

  const [gridItemStyles, setGridItemStyles] = useState({
    gridItems: "3",
  });

  function handleGridItemSubmit(event) {
    event.preventDefault();
    console.log("Inside handle Grid submit");
    const formData = new FormData(event.target);
    // console.log(formData);

    const gridItems = formData.get("gridItems");
    setGridItemStyles({
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
    // setAdvancedBadgeStyles({
    //   color,
    //   backgroundColor,
    //   fontWeight,
    //   fontSize,
    //   paddingInline,
    //   paddingBlock,
    //   borderRadius,
    // });
  }

  return (
    <div>
      {children}
      <GridItemForm handleGridItemSubmit={handleGridItemSubmit} />
      <GridTownForm handleGridSubmit={handleGridSubmit} />
      <Grid gridItemStyles={gridItemStyles} gridStyles={gridStyles} />
    </div>
  );
}
