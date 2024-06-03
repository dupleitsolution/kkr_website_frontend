import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="relative overflow-hidden z-50 border-gray-200 bg-[#842029] dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-wrap justify-between items-center py-2 mx-auto max-w-screen-xl px-">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://cdn-icons-png.flaticon.com/128/2465/2465342.png"
            className="h-5 md:h-8 ml-[10px]"
            alt="Flowbite Logo"
          />
          <Link
            to="/"
            className="self-center font-semibold whitespace-nowrap md:text-xl dark:text-white"
            style={{ color: "#edbb5f" }}
          >
            Home
          </Link>
        </a>

        <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col mt-4 font-medium bg-gray-50 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-white bg-blue-700 rounded dark:bg-blue-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
