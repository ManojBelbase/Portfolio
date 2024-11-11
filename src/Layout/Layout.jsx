import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { BiArrowToTop } from "react-icons/bi";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Remove the event listener on component unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="bg-black relative">
      <Navbar />
      <div className="lg:mx-24 md:mx-16 sm:mx-6 mx-2 md:my-10 my-6">
        <Outlet />
      </div>
      <Footer />
      {/* scroll to top icon */}
      {isVisible && (
        <Link
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-8 right-4 md:bottom-10 md:right-12 border p-[6px] md:p-2 rounded-full bg-gray-800 text-white cursor-pointer"
          aria-label="Scroll to Top"
          title="Scroll To Top"
        >
          <BiArrowToTop className="md:text-2xl text-xl text-secondary" />
        </Link>
      )}
    </div>
  );
};
export default Layout;
