"use client";

import Link from "next/link";
import "../../app/globals.css";
import { useState } from "react";
import { IoClose, IoMenu, IoCart } from "react-icons/io5";

const NavLinks = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <li>
        <Link
          onClick={closeMenu}
          href={"/"}
          className="text-white hover:text-blue-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={closeMenu}
          href={"/products"}
          className="text-white hover:text-blue-500"
        >
          Products
        </Link>
      </li>
      {/* <li>
        <Link href={"/cart"} className="text-white hover:text-blue-500">
          <IoCart size={24} />
        </Link>
      </li> */}
    </>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-600 py-4 px-2 sticky top-0">
      <nav className="container mx-auto flex justify-between">
        <Link href={"/"} className="text-white text-2xl font-bold">
          Logo
        </Link>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <NavLinks closeMenu={closeMenu} />
          </ul>
          {isOpen && (
            <div className="bg-gray-600 md:hidden absolute top-full left-0 w-full py-4 px-2">
              <ul className="flex flex-col space-y-4">
                <NavLinks closeMenu={closeMenu} />
              </ul>
            </div>
          )}

          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <IoClose size={24} color="white" />
            ) : (
              <IoMenu size={24} color="white" />
            )}
          </button>
          <Link href={"/cart"} className="text-white hover:text-blue-500">
            <IoCart size={24} />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
