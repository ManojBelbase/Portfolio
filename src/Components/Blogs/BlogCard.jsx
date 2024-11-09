import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <Link
      to={`/blog/${blog?.id}`}
      className="border border-gray-200 rounded-lg shadow-md w-full sm:w-80 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56">
        <img
          src={blog?.image}
          alt={blog?.title}
          className="h-full w-full object-cover"
        />

        {/* Category Badge */}
        <div className="absolute top-2 left-2 text-xs sm:text-sm px-2 py-1 rounded-full bg-primary">
          {blog?.category}
        </div>
      </div>

      {/* Description Section */}
      <div className="p-3 sm:p-4">
        {/* Date and Reading Time */}
        <div className="flex items-center text-accent text-xs gap-2 mb-1 sm:mb-2">
          <p>{blog?.date}</p>
          <span className="h-1 w-1 bg-accent rounded-full"></span>
          <p>5 mins read</p>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-semibold text-white">
          {blog?.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-accent line-clamp-2 mt-1 sm:mt-2">
          {blog?.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
