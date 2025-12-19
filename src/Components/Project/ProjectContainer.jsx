import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
const ProjectContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideViewMoreBtn = "/projects";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className={`${
        location.pathname !== hideViewMoreBtn ? "border sm:rounded-2xl border-gray-700 md:p-6 p-2" : ""
      } rounded-md flex flex-col gap-2 md:gap-5 `}
    >
      <div className="flex items-center justify-between w-full">
        {location.pathname !== hideViewMoreBtn && (
          <div className="w-[80%] flex items-center gap-2">
            <h1 className="text-xl font-semibold">
              <span className="text-secondary">#</span>latest-projects
            </h1>
            <p className="md:block hidden border w-[50%] border-secondary"></p>
          </div>
        )}

        {/* View all button display only on desktop view */}
        <div className="hidden md:block">
          {location.pathname !== hideViewMoreBtn && (
            <button
              className={`border border-gray-700 px-2 py-2 rounded-md flex gap-1 items-center `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => navigate("/projects")}
            >
              <span className="">View All</span>
              <BsArrowRight
                className={`${
                  isHovered ? "-rotate-45 " : ""
                }text-2xl text-secondary transition-transform`}
              />
            </button>
          )}
        </div>
      </div>
      {/* displaying card */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-2 md:gap-5 mt-2">
        {location.pathname !== hideViewMoreBtn
          ? projectData.slice(0, 3).map((item, i) => {
              return <ProjectCard item={item} key={i} />;
            })
          : projectData.map((item, i) => {
              return <ProjectCard item={item} key={i} />;
            })}
      </div>
      {/* view more button display in mobile view */}
      <div className="md:hidden block">
        {location.pathname !== hideViewMoreBtn && (
          <button
            className={`border border-gray-700 px-2 py-1 md:py-2 rounded-md md:rounded-xl flex gap-1 items-center `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/projects")}
          >
            <span className="text-sm md:text-base">View All</span>
            <BsArrowRight
              className={`${
                isHovered ? "-rotate-45 " : ""
              }md:text-2xl text-xl text-secondary transition-transform`}
            />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectContainer;
