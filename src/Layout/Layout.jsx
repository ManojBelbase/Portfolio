import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

const Layout = () => {

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
    <div className="bg-black relative min-h-screen">
      <Navbar />

      <div className="sm:pt-24 pt-20 lg:mx-24 md:mx-16 sm:mx-6 mx-2 md:my-10 my-6">
        <Outlet />
      </div>
      <Footer />

    </div>
  );
};
export default Layout;
