import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaCodepen, FaTwitter } from "react-icons/fa";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="bg-indigo-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 my-2 mr-6 text-gray-100 hover:text-gray-800 text-3xl font-bold tracking-widest" activeClassName="text-white">
            Logo
          </NavLink>
          <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-purple-300" activeClassName="text-indigo-100 bg-indigo-700">
            Blog Posts
          </NavLink>
          <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-purple-300" activeClassName="text-indigo-100 bg-indigo-700">
            Projects
          </NavLink>          
          <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-purple-300" activeClassName="text-indigo-100 bg-indigo-700">
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-2 px-3 my-6">
          <a href="https://linkedin.com/in/robson-vinicius" className="mr-5 p-3 rounded-full text-white bg-blue-700 hover:text-blue-700 hover:bg-white">
            <FaLinkedinIn style={{ height: 25, width: 25}} />
          </a>
          <a href="https://codepen.com/robsonvinicius" className="mr-5 p-3 rounded-full text-white bg-black hover:text-black hover:bg-white">
            <FaCodepen style={{ height: 25, width: 25}} />
          </a>
          <a href="https://twitter.com/robsonviniciusr" className="p-3 rounded-full text-white bg-blue-400 hover:text-blue-400 hover:bg-white">
            <FaTwitter style={{ height: 25, width: 25}} />          
          </a>
        </div>
      </div>
    </header>
  )
}