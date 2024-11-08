import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import projectData from "./ProjectData";
import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const hideViewMoreBtn = "/projects";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`${
        location.pathname !== hideViewMoreBtn ? "border md:p-6 p-4" : ""
      } rounded-md  flex flex-col gap-5 `}
    >
      <div className="flex items-center justify-between w-full">
        {location.pathname !== hideViewMoreBtn && (
          <div className="w-[80%]  flex items-center gap-2">
            <h1 className="text-xl font-semibold">
              <span className="text-secondary">#</span>latest-projects
            </h1>
            <p className="border w-[50%] border-secondary"></p>
          </div>
        )}

        <div className="hidden md:block">
          {location.pathname !== hideViewMoreBtn && (
            <button
              className={`border px-2 py-2 rounded-md flex gap-1 items-center `}
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-3">
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
            className={`border px-2 py-2 rounded-md flex gap-1 items-center `}
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
  );
};

export default ProjectContainer;
