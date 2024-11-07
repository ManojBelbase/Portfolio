import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaEyeSlash, FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const ProjectCard = ({ item }) => {
  const location = useLocation();
  const hideContent = "/projects";
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Project Image */}
      <div className="h-48 w-full cursor-pointer">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Project Details */}
      <div className="p-4 flex flex-col gap-3">
        {/* Project Title */}
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>

        {/* Project Language */}
        <p className="text-sm text-secondary font-medium">{item.language}</p>

        {/* Project Description */}
        <p
          className={`text-sm text-accent ${
            location.pathname !== hideContent ? "line-clamp-2" : ""
          }`}
        >
          {item.description}
        </p>

        {/* GitHub Button */}
        <div className="flex items-center gap-2">
          <Link
            to={item.githubRepo}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2 text-center text-white border-secondary border py-1 px-4 transition-colors duration-200 rounded-md"
          >
            <span>Github</span>
            <FaGithub className="text-xl" />
          </Link>

          <Link
            to={item?.url || "#"}
            target={item?.url ? "_blank" : "_self"}
            className={`${
              item?.url ? "text-white" : "text-accent cursor-not-allowed"
            } flex gap-3 items-center text-center border-secondary border py-1 px-4 rounded-md transition-colors duration-200`}
          >
            Live
            {item?.url ? (
              <FaEye className="text-xl" />
            ) : (
              <FaEyeSlash className="text-xl" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
