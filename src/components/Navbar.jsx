import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ titlename, flink, slink}) {

  let [menu,setmenuBar] = useState("hidden");

  //made a function to open and close the menu for mobile screen
  let checkmenu = ()=> (menu=="hidden")? setmenuBar("block") : setmenuBar("hidden");
  
  return (
   <header className="text-white bg-slate-800">
        <nav className="border-gray-200 dark:bg-gray-900">
          <div className="flex flex-wrap items-center justify-between p-4 mx-auto max-w-7xl">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                {titlename}
              </span>
            <button
            // when click on the hamburger
              onClick={checkmenu}
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

        {/* put the variable here   */}
        <div className={`${menu} w-full md:block md:w-auto`} id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 text-lg font-semibold text-center border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 gap-7">
                <li>
                  <Link  className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white"
                    aria-current="page" to="/"> {flink}</Link>
                </li>
                <li>
                 
                  <Link className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" to="/about">{slink}</Link>
                </li>
    
              </ul>
            </div>
          </div>
        </nav>
   </header>
  );
}

export default Navbar;
