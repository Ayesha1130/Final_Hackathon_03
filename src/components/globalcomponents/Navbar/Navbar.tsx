"use client";
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import AuthStatus from "@/components/AuthStatus";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4">
        {/* Hamburger Button (before the logo) */}
        <button onClick={toggleMenu} className="md:hidden text-2xl" aria-label="Toggle Menu">
          {!isOpen ? <IoMdMenu /> : <RxCross2 />}
        </button>

        {/* Logo on the left */}
        <h1 className="text-2xl font-serif text-[#22202E] ml-10">Avion</h1>

        {/* Icons and Signin/Signup (right side) */}
        <div className="flex items-center gap-4 ml-auto">
          <Link href="/wishlist">
            <CiHeart size={20} />
          </Link>
          <Link href="/cart">
            <MdOutlineShoppingCart size={20} />
          </Link>
          <Link href="/">
            <FaUserCircle size={20} />
          </Link>
          <Link href="/join-us" className="font-serif font-bold">
            Join Us
          </Link>
          <AuthStatus />
        </div>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 bg-white shadow-lg z-20">
          <div className="absolute top-4 right-4">
            {/* Close button positioned within the menu */}
            <button onClick={toggleMenu} aria-label="Close Menu">
              <RxCross2 size={30} />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 mt-20 text-black font-serif">
            <li>
              <Link href="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li>
              <Link href="/product" onClick={toggleMenu}>Products</Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu}>About Us</Link>
            </li>
            <li>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
            <li>
              <Link href="/popularproducts" onClick={toggleMenu}>Popular Product</Link>
            </li>
            <li>
              <Link href="/categoryproduct" onClick={toggleMenu}>Best Selling Product</Link>
            </li>
            <li>
              <Link href="/brand" onClick={toggleMenu}>Brand</Link>
            </li>
            <li>
              <Link href="/product" onClick={toggleMenu}>Chairs</Link>
            </li>
            <li>
              <Link href="/product" onClick={toggleMenu}>Crockery</Link>
            </li>
            <li>
              <Link href="/product" onClick={toggleMenu}>Tableware</Link>
            </li>
            <li>
              <Link href="/product" onClick={toggleMenu}>Cutlery</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop-only Navigation Bar (with categories) */}
      <div className="hidden md:flex justify-center bg-[#F9F9F9] p-5">
        <ul className="flex gap-5 font-serif text-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/product">Products</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/popularproducts">Popular Product</Link>
          </li>
          <li>
            <Link href="/categoryproduct">Best Selling Product</Link>
          </li>
          <li>
            <Link href="/brand">Brand</Link>
          </li>
          <li>
            <Link href="/product">Chairs</Link>
          </li>
          <li>
            <Link href="/product">Crockery</Link>
          </li>
          <li>
            <Link href="/product">Tableware</Link>
          </li>
          <li>
            <Link href="/product">Cutlery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
