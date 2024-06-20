import React from "react";

export default function Grid({
  gridItemStyles = {
    gridItems: "3",
  },
  gridStyles = {
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "",
    gridGap: "10px",
    justifyItems: "",
    alignItems: "",
    backgroundColor: "",
  },
}) {
  const {
    gridTemplateColumns,
    gridTemplateRows,
    gridGap,
    justifyItems,
    alignItems,
    backgroundColor,
  } = gridStyles;

  const { gridItems } = gridItemStyles;

  const styleObject = {
    gridTemplateColumns: gridTemplateColumns,
    gridTemplateRows: gridTemplateRows,
    gridGap: gridGap,
    justifyItems: justifyItems,
    alignItems: alignItems,
    backgroundColor: backgroundColor,
  };

  return (
    <>
      <h5>sandbox</h5>
      <div className="grid border border-red-400" style={styleObject}>
        {Array.from({ length: gridItems }, (_, i) => (
          <div key={i}>
            <p className="bg-slate-400 col-auto row-auto">GridItem</p>
          </div>
        ))}
      </div>
    </>
  );
}
