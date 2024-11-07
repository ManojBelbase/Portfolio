import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-4 bg-[#1E2226] rounded-t-md text-white">
      <div className=" mx-auto flex md:flex-row flex-col gap-2 items-center justify-between px-6 lg:px-28 md:px-24 sm:px-6">
        <div className="md:h-12 md:w-12 h-10 w-10 flex items-center justify-center">
          <img
            src={logo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            alt="Logo"
            className="h-full w-full object-cover rounded-full cursor-pointer"
          />
        </div>
        <div className="text-center text-sm md:text-base">
          <p className="flex items-center md:space-x-1 text-accent">
            Designed & developed by
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="md:font-semibold ml-2 border-b-2 text-xs md:text-sm border-secondary text-white"
            >
              Manoj Belbase
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;