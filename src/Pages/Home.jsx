import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/About/AboutMe";
import ProjectContainer from "../Components/Project/ProjectContainer";
import { BiArrowToTop } from "react-icons/bi";
import { Link } from "react-router-dom";

const Home = () => {
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
    <div className="flex flex-col gap-4 relative">
      <Hero />
      <AboutMe />
      <ProjectContainer />

      {isVisible && (
        <Link
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="fixed bottom-2 right-4 md:bottom-10 md:right-12 border p-1 md:p-2 rounded-full bg-gray-800 text-white cursor-pointer"
          aria-label="Scroll to Top"
          title="Scroll To Top"
        >
          <BiArrowToTop className="md:text-2xl text-xl text-secondary" />
        </Link>
      )}
    </div>
  );
};

export default Home;
