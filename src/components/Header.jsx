import React from "react";
import Nav from "./Header/Nav";
import Logo from "./Header/Logo";

export default function Header() {
  return (
    <div className="grid grid-cols-2 z-50 absolute font-black text-2xl border-2 border-red-500 border-solid md:text-5xl">
      <Logo />
      <Nav />
    </div>
  );
}
