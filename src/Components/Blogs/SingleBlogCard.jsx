import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // import icons
import { useNavigate } from "react-router-dom";

const SingleBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen p-2 border rounded-md bg-primary text-gray-100 flex flex-col items-center">
      <div className="min-w-3xl w-full bg-primary rounded-lg shadow-lg overflow-hidden relative">
        {/* Blog Image */}
        <div className="h-64 md:h-80 lg:h-[500px] overflow-hidden">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Blog Content */}
        <div className="md:p-6 p-2">
          {/* Category and Date */}
          <div className="flex justify-between text-sm text-gray-400 my-2">
            <span className="bg-white text-primary px-2 py-1 rounded-md uppercase">
              {blog.category}
            </span>
            <span>{blog?.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-100">
            {blog?.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {blog?.author[0]}
              </span>
            </div>
            <div>
              <p className="text-sm text-gray-300">Written by</p>
              <p className="text-lg font-medium text-gray-100">
                {blog?.author}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mt-2">
            <p className="text-accent">{blog.description}</p>
          </div>
        </div>

        {/* Edit and Delete Buttons (only visible for admin) */}
        <div className="md:px-6 py-2 px-2 flex gap-2">
          <button
            className="p-2 bg-secondary rounded-full text-gray-100 hover:bg-gray-600"
            onClick={() => navigate(`/blog/update/${blog.id}`)}
          >
            <FaEdit />
          </button>
          <button className="p-2 bg-red-500 rounded-full text-gray-100 hover:bg-gray-600">
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
