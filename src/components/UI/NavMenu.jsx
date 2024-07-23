"use client";

import { useState } from "react";
import Link from "next/link";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <nav className="justify-between items-center ml-auto p-[1rem]">
      <div
        className="text-lg text-pink-500 cursor-pointer border-green-600 border-2 md:hidden "
        onClick={toggleMenu}
      >
        ☰
      </div>

      {isOpen && (
        <div>
          <ul className="list-none m-0 p-10 text-base gap-2 absolute top-[100%] right-0 flex flex-col bg-slate-50 border-2 md:hidden">
            <li className="ml-4">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-4">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-4">
              <Link href="/services">Services</Link>
            </li>
            <li className="ml-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      )}
      <ul className="hidden list-none md:flex flex-col gap-5 text-base border-pink-400 border-2 md:flex-row">
        <li className="ml-4">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-4">
          <Link href="/about">About</Link>
        </li>
        <li className="ml-4">
          <Link href="/services">Services</Link>
        </li>
        <li className="ml-4">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;

// .navbar {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: #333;
//     padding: 1rem;
// }
("flex justify-between items-center bg-slate-300 p-[1rem]");

// .logo a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 1.5rem;
// }

// .menuIcon {
//     display: none;
//     font-size: 1.5rem;
//     color: #fff;
//     cursor: pointer;
// }

// .navLinks {
//     list-style: none;
//     display: flex;
// }

// .navLinks li {
//     margin-left: 1rem;
// }

// .navLinks a {
//     color: #fff;
//     text-decoration: none;
//     font-size: 1rem;
// }

// @media (max-width: 768px) {
//     .menuIcon {
//         display: block;
//     }

//     .navLinks {
//         display: none;
//         flex-direction: column;
//         width: 100%;
//     }

//     .navLinks.active {
//         display: flex;
//     }

//     .navLinks li {
//         margin: 0;
//         padding: 0.5rem 0;
//         text-align: center;
//     }
// }
