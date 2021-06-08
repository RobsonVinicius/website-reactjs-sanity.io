import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="bg-indigo-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact className="inflex-flex items-center py-6 px-3 mr-4 text-gray-100 hover:text-gray-800 text-3xl font-bold tracking-widest" activeClassName="text-white">
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
      </div>
    </header>
  )
}