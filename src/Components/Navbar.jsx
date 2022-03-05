import React from "react";
import { Link } from "react-router-dom";
import { Search } from "./Search.jsx";

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen ">
      <Link to="/">
        <p className="text-2xl font-bold text-gray-700 py-1 px-2 rounded  dark:text-white">
          Google Clone
        </p>
      </Link>
      <button
        type="button"
        onClick={() => setDarkTheme(!darkTheme)}
        className="text-md dark:bg-gray-50 dark:text-gray-900 bg-gray-700 text-white border rounded-full px-2 py-1 hover:shadow-lg"
      >
        {darkTheme ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
    <Search />
  </div>
);
