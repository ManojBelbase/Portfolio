import React, { useState } from "react";
import cover from "../../assets/cover.mp4";
import profile from "../../assets/profile.png";
import socialLinks from "./SocilaLinks";
import { Link } from "react-router-dom";
import GitHub from "../../api/Github";
import coverSVG from "../../assets/coverSVG.svg";
import { FiDownloadCloud } from "react-icons/fi";
import resume from "../../assets/resume.pdf";

const Hero = () => {
  // const [follower,setFollower]=useState()
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div className="flex flex-col shadow-sm border-[#262626]">
      {/* Hero SVG/ video*/}
      <div className="overflow-hidden w-full">
        {/* Desktop view .MP4 */}
        <div className="w-full hidden md:block overflow-y-hidden">
          <video src={cover} autoPlay muted className="w-full h-full" />
        </div>
        {/* mobile view SVG */}
        <div className="w-full block md:hidden overflow-y-hidden rounded-t-md">
          <img src={coverSVG} alt="" className="rounded-t-md" />
        </div>
      </div>

      {/* hero container */}
      <div
        className="h-52 border rounded-b-3xl p-3 relative border-gray-600"
        style={{
          boxShadow: "0 -1px 8px rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* profile */}
        <div className="md:h-44 md:w-44 h-28 w-28 md:-top-20 -top-14 left-6 absolute rounded-full border-2 border-white  profile-background">
          <img
            src={profile}
            alt="profile"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        {/* Profile Info and Social Icon */}
        <div className="md:bottom-10 bottom-5 left-6 right-6 absolute flex sm:flex-row flex-col gap-5 justify-between items-start">
          <div>
            <h1 className="font-medium md:text-2xl text-xl">Manoj Belbase</h1>
            <p className="text-xs font-normal text-accent">
              MERN Stack Developer
            </p>
          </div>
          <div>
            {/* Replace with actual social icons */}
            <div className="flex items-center gap-2 mt-1">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  className={`${link.bgColor} p-1 md:p-2 rounded-full cursor-pointer relative shadow-sm shadow-secondary`}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  to={link.path}
                >
                  {link.icon}
                  {hoveredIcon === index && (
                    <span className="absolute -top-4 rounded-full transition-all transform scale-100 duration-300 delay-200 bg-primary border flex items-center justify-center h-6 -right-1 w-6 text-[8px] md:text-[10px] text-center text-secondary">
                      {link.title === "github" ? (
                        <GitHub />
                      ) : link.title === "facebook" ? (
                        "108"
                      ) : link.title === "youtube" ? (
                        "106"
                      ) : link.title === "linkedin" ? (
                        "116"
                      ) : link.title === "instagram" ? (
                        "124"
                      ) : link.title === "medium" ? (
                        "4"
                      ) : (
                        "2"
                      )}
                    </span>
                  )}
                  {hoveredIcon !== index && (
                    <span className="absolute -top-4 rounded-full transition-all transform scale-0 duration-300 delay-200 bg-primary border flex items-center justify-center h-6 -right-1 w-6 text-xs text-center text-white">
                      9
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/*Download resume */}
        <div
          className="absolute md:right-6 md:bottom-36 bottom-5 right-4 border border-secondary 
             flex items-center px-2 py-1 md:px-3 md:py-2 rounded-sm  cursor-pointer 
             shadow-sm shadow-secondary hover:shadow-md transition-shadow duration-300 
             bg-black dark:bg-gray-900 text-black dark:text-white"
          onClick={() => window.open(resume, "_blank")}
        >
          <span className="mr-2 md:text-base text-sm text-white">Resume</span>
          <FiDownloadCloud className="md:text-xl text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
