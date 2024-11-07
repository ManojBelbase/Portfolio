import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Layout = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="lg:mx-28 md:mx-24 sm:mx-6 mx-6 md:my-10 my-6">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
