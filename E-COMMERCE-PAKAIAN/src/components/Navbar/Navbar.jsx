import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <div className="bg-primary/30 dark:bg-secondary/30 shadow-sm">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3 lg:px-10 lg:py-4 gap-4 md:gap-0">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 cursor-pointer hover:text-gray-600 dark:hover:text-white font-bold md:text-xl lg:text-2xl"
        >
          <img src={Logo} alt="logo" className="w-10 sm:w-20 md:w-24 lg:w-32" />
          <span className="hidden md:block">E-Commerce</span>
        </a>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white dark:bg-secondary/30 rounded-full px-3 py-2 transition duration-300 ease-in-out">
          <input
            type="text"
            placeholder="Search"
            className="w-[150px] hover:w-[200px] focus:w-[200px] focus:outline-none dark:bg-transparent bg-transparent px-2 transition duration-300 ease-in-out rounded-full text-sm text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-300"
          />
          <button type="submit">
            <IoMdSearch className="text-gray-500 dark:text-white text-xl ml-2 transition duration-300 ease-in-out rounded-full" />
          </button>
        </div>

        {/* Cart */}
        <div className="relative flex items-center bg-white dark:bg-secondary/30 rounded-full px-4 py-2 cursor-pointer transition duration-300 ease-in-out">
          <FaShoppingCart className="text-gray-800 dark:text-white text-xl" />
          <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full dark:bg-yellow-400">
            0
          </span>
        </div>

        {/* Dark Mode Button */}
        <DarkMode />
      </div>
    </div>
  );
};

export default Navbar;
