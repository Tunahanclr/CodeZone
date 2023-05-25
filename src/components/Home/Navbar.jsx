import React, { useState } from "react";
import News from "../News/News"
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
<>
<div className="bg-black/80 h-20 text-white">
      <div className="flex items-center h-full  container mx-auto justify-between">
        <div className="">
          <NavLink
            to={"Home"}
            className="text-blue-500 cursor-pointer text-xl md:text-3xl font-bold font-sans"
          >
            Code Zone
          </NavLink>
        </div>
        <div className="flex items-center">
          <ul className="hidden font-semibold lg:flex gap-8 text-base items-center">
            <li>
              <NavLink to={'/todo'} className="">
                Todo  
              </NavLink>
            </li>
            <li>
              <NavLink to={'/blog'} className="">
                Blog
              </NavLink>
            </li>
            <li>
              <a href="" className="">
                Quiz
              </a>
            </li>
            <li>
              <a href="" className="">
                Course
              </a>
            </li>
            <button
              className="bg-white hover:bg-white/80 transition-all text-black w-28 h-10 rounded-md"
              onClick={handleLogout}
            >
              Log out
            </button>
          </ul>
          <button className="lg:hidden ml-4" onClick={handleMenuToggle}>
            <div className="mt-3 pr-4">
              {isOpen ? (
                <FaTimes className="text-xl " />
              ) : (
                <FaBars className=" text-xl" />
              )}
            </div>
          </button>
        </div>
      </div>
      <ul
        className={`lg:hidden text-center gap-3 bg-white  z-50 h-screen   text-xl sm:text-2xl  transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="">
          <a href="" className="text-black hover:text-blue-400">
            Todo
          </a>
        </li>
        <li>
          <a href="" className="text-black hover:text-blue-400">
            Blog
          </a>
        </li>
        <li>
          <a href="" className="text-black hover:text-blue-400">
            Quiz
          </a>
        </li>
        <li>
          <a href="" className="text-black hover:text-blue-400">
            Course
          </a>
        </li>
        <button
          className="bg-black hover:bg-black/80 transition-all text-white mt-2 w-28 h-10 rounded-md"
          onClick={handleLogout}
        >
          Log out
        </button>
      </ul>
    </div>
        <News/>
</>
  );
}
