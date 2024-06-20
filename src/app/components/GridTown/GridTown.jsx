"use client";

import React from "react";

function GridTown({ children }) {
  return (
    <div handleGridSubmit={handleGridSubmit}>
      <h3>From GridTown component</h3>
      {children}
    </div>
  );
}

export default GridTown;
