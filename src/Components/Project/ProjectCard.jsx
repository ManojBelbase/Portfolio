import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {  FaEye } from "react-icons/fa";
import ImagePopup from "./ImagePopup";
import { motion } from "framer-motion";
import { FaLink, FaLinkSlash } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ item }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const location = useLocation();
  const isHideContentPath = location.pathname.startsWith("/projects");

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const liveButtonClasses = item?.url
    ? "text-white"
    : "text-accent cursor-not-allowed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-700 rounded-2xl shadow-md overflow-hidden hover:shadow-lg shadow-gray-700 transition-shadow duration-300"
    >
      <div
        onClick={togglePopup}
        className="h-44 sm:h-48 w-full cursor-pointer relative flex items-center justify-center"
      >
        <img
          src={item.images[0]}
          alt={item.title}
          className={`h-full w-full object-contain hover:opacity-50`}
          onMouseEnter={() => setIsImageHovered(true)}
          onMouseLeave={() => setIsImageHovered(false)}
        />
        {isImageHovered && (
          <FaEye
            className="absolute text-5xl hover:opacity-100"
            style={{ pointerEvents: "none" }}
          />
        )}
      </div>

      {isPopupVisible && (
        <ImagePopup images={item.images} onClose={togglePopup} />
      )}

      <div className="p-3 sm:p-4 flex flex-col gap-2 sm:gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-white">
          {item.title}
        </h3>
        <p className="text-xs sm:text-sm text-secondary font-medium">
          {item.language}
        </p>
        <p
          className={`text-xs sm:text-sm text-accent ${
            !isHideContentPath ? "line-clamp-2" : ""
          }`}
        >
          {item.description}
        </p>
        <div className="flex items-center gap-2">
          <Link
            to={item.githubRepo || "#"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="flex items-center gap-1 sm:gap-2 text-center text-white border-secondary border py-1 px-3 sm:px-4 transition-colors duration-200 rounded-md text-xs sm:text-sm"
          >
            <span>Github</span>
            <FiGithub className="text-lg sm:text-xl" />
          </Link>

          <Link
            to={item?.url || "#"}
            target={item?.url ? "_blank" : "_self"}
            className={`${liveButtonClasses} flex gap-2 sm:gap-3 items-center text-center border-secondary border py-1 px-3 sm:px-4 rounded-md transition-colors duration-200 text-xs sm:text-sm`}
          >
            Live
            {item?.url ? (
              <FaLink className="text-lg sm:text-xl" />
            ) : (
              <FaLinkSlash className="text-lg sm:text-xl" />
            )}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
