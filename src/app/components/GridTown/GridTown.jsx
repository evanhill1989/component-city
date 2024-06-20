"use client";

import React from "react";

function handleGridSubmit(event) {
  event.preventDefault();
  console.log("Inside handle Grid submit");
  // const formData = new FormData(event.target);
  // console.log(formData);
  // const color = formData.get("color");
  // const backgroundColor = formData.get("backgroundColor");
  // const fontWeight = formData.get("fontWeight");
  // const fontSize = formData.get("fontSize");
  // const paddingInline = formData.get("paddingInline");
  // const paddingBlock = formData.get("paddingBlock");

  // const borderRadius = formData.get("borderRadius");
  // console.log(
  //   color,
  //   backgroundColor,
  //   fontWeight,
  //   fontSize,
  //   paddingInline,
  //   paddingBlock,
  //   borderRadius
  // );
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

function GridTown({ children }) {
  return (
    <div handleGridSubmit={handleGridSubmit}>
      <h3>From GridTown component</h3>
      {children}
    </div>
  );
}

export default GridTown;
