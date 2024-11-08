import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Import icons for hamburger and close
import logo from "../../assets/logo.png";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Project",
    path: "/projects",
  },
  {
    title: "Blog",
    path: "/blogs",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile menu toggle
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div
      className={`lg:mx-24 md:mx-16 sm:mx-6 mx-6 my-5 bg-[#1E2226] rounded-md md:rounded-full px-2 py-2 md:border border-gray-400`}
    >
      <div className="flex items-center justify-between">
        <div
          className="md:h-14 h-10 rounded-full cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} className="h-full rounded-full" alt="Logo" />
        </div>

        {/* Desktop View */}
        <ul className="hidden md:flex bg-white border rounded-full md:h-14 h-10 items-center  px-2 lg:gap-4 md:gap-2 lowercase">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="text-black md:text-lg lg:text-xl lg:font-medium"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "border-blue-400 md:px-4 md:py-2 px-3 py-1 bg-primary text-white rounded-full"
                    : "text-black px-3 py-1"
                }
                to={item.path}
              >
                <span className="text-secondary">#</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile View */}
      {isOpen && (
        <ul className="mt-4 bg-[#1E2226] rounded-lg md:hidden flex flex-col space-y-2 px-4 py-2 border border-gray-500">
          {navItems.map((item, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded text-white bg-primary"
                    : "block px-3 py-2 rounded text-white"
                }
                to={item.path}
                onClick={toggleMenu} // Close menu when clicking a link
              >
                <span className="text-secondary">#</span>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
