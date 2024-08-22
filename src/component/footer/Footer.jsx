import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active link styling

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
      <div className="flex justify-around">
        <NavLink
          to="/driver"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Driver
        </NavLink>
        <NavLink
          to="/vehicle"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "hover:text-gray-300"
          }
        >
          Vehicle
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
