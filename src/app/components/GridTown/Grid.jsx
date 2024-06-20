import React from "react";

export default function Grid({
  gridItemStyles = { alignSelf: "default", justifySelf: "default" },
  gridItemNumber = {
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

  const { alignSelf, justifySelf } = gridItemStyles;

  const { gridItems } = gridItemNumber;

  const gridItemStyleObject = {
    alignSelf,
    justifySelf,
  };

  const gridStyleObject = {
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
      <div className="grid border border-red-400" style={gridStyleObject}>
        {Array.from({ length: gridItems }, (_, i) => (
          <div key={i} style={gridItemStyleObject}>
            <p className="bg-slate-400 col-auto row-auto">GridItem</p>
          </div>
        ))}
      </div>
    </>
  );
}
