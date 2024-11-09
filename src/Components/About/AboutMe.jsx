import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import aboutImage from "../../assets/about.png";
import Skills from "./Skills";
import Education from "./Education";
const AboutMe = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideReadMoreBtnRoute = "/about";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${
        location.pathname !== hideReadMoreBtnRoute ? "border p-4 md:p-6  " : ""
      } rounded-md  flex flex-col gap-5`}
    >
      {location.pathname !== hideReadMoreBtnRoute && (
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">
            <span className="text-secondary">#</span>about-me
          </h1>{" "}
          <div className="border w-[40%] border-secondary"></div>
        </div>
      )}
      {/* profile descripion */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <div className="flex flex-col items-start gap-4 text-accent md:text-base text-sm">
          <h2 className="">Hello, I'm Manoj</h2>
          <p className="">
            I'm a self-taught MERN stack developer with a passion for both
            coding and design. I specialize in creating responsive websites from
            scratch, transforming concepts into seamless, modern web
            experiences.
          </p>
          <p>
            Over the past year, I've enjoyed bringing clients' visions to life
            online, continuously learning and exploring new technologies and
            design trends to make my work stand out. I'm always excited to
            combine technical and creative skills to build solutions that are
            both functional and visually appealing.
          </p>
          {location.pathname !== hideReadMoreBtnRoute && (
            <button
              className={`border px-2 py-2 rounded-md text-white flex items-center gap-2 transition-transform `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => navigate("/about")}
            >
              <span>Read More</span>
              <BsArrowRight
                className={`text-2xl text-secondary transition-transform ${
                  isHovered ? "-rotate-45" : ""
                }`}
              />
            </button>
          )}
        </div>

        {/* about image */}
        {location.pathname === hideReadMoreBtnRoute && (
          <div className="w-full">
            <div className="sm:h-80 h-60 rounded-t-full w-80 sm:w-96  relative bg-secondary">
              <div className="rounded-md sm:h-96 w-auto absolute bottom-0 -right-6">
                <img
                  src={aboutImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Skills */}
      {location.pathname === hideReadMoreBtnRoute && <Education />}
    </div>
  );
};

export default AboutMe;
