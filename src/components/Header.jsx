import React from "react";
import NavMenu from "./UI/NavMenu";
import Logo from "./Header/Logo";

export default function Header() {
  return (
    <div className="container-width relative grid grid-cols-2 z-50 placeholder:font-700 text-2xl border-2 border-red-500 items-center border-solid md:text-5xl">
      <h3 className="text-logo">gridIQ</h3>
      <NavMenu />
    </div>
  );
}
