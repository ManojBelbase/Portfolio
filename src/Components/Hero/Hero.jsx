import React, { useState } from "react";
import cover from "../../assets/cover.mp4";
import profile from "../../assets/profile.png";
import socialLinks from "./SocilaLinks";
import { Link } from "react-router-dom";
import GitHub from "../../api/Github";
import ReactPlayer from "react-player";

const Hero = () => {
  // const [follower,setFollower]=useState()
  const [hoveredIcon, setHoveredIcon] = useState(null);
  return (
    <div className="flex flex-col shadow-sm border-[#262626]">
      <div className="overflow-hidden w-full">
        <div className="w-full overflow-y-hidden">
          <ReactPlayer
            url={cover} // Path to your video
            playing
            loop
            muted
            width="100%"
            height="100%"
            className=" top-0 left-0"
          />
          {/* <video src={cover} autoPlay muted className="w-full h-full" /> */}
        </div>
      </div>
      <div
        className="h-52 border rounded-b-3xl p-3 relative border-gray-600"
        style={{
          boxShadow: "0 -1px 20px rgba(255, 255, 255, 0.3)",
        }}
      >
        {/* profile */}
        <div className="md:h-44 md:w-44 h-28 w-28 md:-top-20 -top-14 left-6 absolute rounded-full border-2 border-secondary p-1">
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
                  className={`${link.bgColor} p-2 rounded-full cursor-pointer relative`}
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
                      ) : (
                        ""
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
      </div>
    </div>
  );
};

export default Hero;
