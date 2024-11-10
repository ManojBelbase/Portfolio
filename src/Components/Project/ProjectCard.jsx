import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEyeSlash, FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ item }) => {
  const location = useLocation();
  const hideContent = "/projects";

  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="h-36 sm:h-48 w-full cursor-pointer">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
        {/* Project Title */}
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {item.title}
        </h3>

        {/* Project Language */}
        <p className="text-xs sm:text-sm text-secondary font-medium">
          {item.language}
        </p>

        {/* Project Description */}
        <p
          className={`text-xs sm:text-sm text-accent ${
            location.pathname !== hideContent ? "line-clamp-2" : ""
          }`}
        >
          {item.description}
        </p>

        {/* GitHub and Live Buttons */}
        <div className="flex items-center gap-2">
          <Link
            to={item.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-2 text-center text-white border-secondary border py-1 px-3 sm:px-4 transition-colors duration-200 rounded-md text-xs sm:text-sm"
          >
            <span>Github</span>
            <FaGithub className="text-lg sm:text-xl" />
          </Link>

          <Link
            to={item?.url || "#"}
            target={item?.url ? "_blank" : "_self"}
            className={`${
              item?.url ? "text-white" : "text-accent cursor-not-allowed"
            } flex gap-2 sm:gap-3 items-center text-center border-secondary border py-1 px-3 sm:px-4 rounded-md transition-colors duration-200 text-xs sm:text-sm`}
          >
            Live
            {item?.url ? (
              <FaEye className="text-lg sm:text-xl" />
            ) : (
              <FaEyeSlash className="text-lg sm:text-xl" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
