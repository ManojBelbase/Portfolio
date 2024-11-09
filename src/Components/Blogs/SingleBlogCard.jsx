import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom";
import useDeleteBlog from "./useDeleteBlog";

const SingleBlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  const { deleteBlog, loading } = useDeleteBlog();

  // Log the blog to check the description field
  console.log(blog);

  // Ensure we're properly accessing description and splitting it
  const description = blog?.description[0]; // Assuming the description is stored in an array
  const descriptionParagraphs = description
    ? description.split("\\n").map((paragraph, index) => (
        <p key={index} className="mb-4 text-accent">
          {paragraph}
        </p>
      ))
    : ["Description not available"];

  return (
    <div className="min-h-screen p-1 rounded-md text-gray-100 flex flex-col items-center">
      <div className="border max-w-3xl w-full bg-primary rounded-md shadow-lg overflow-hidden relative">
        {/* Blog Image */}
        <div className="h-64 md:h-80 lg:h-96 overflow-hidden">
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
          <div className="blog-description mt-2">
            {descriptionParagraphs.length > 0 ? (
              descriptionParagraphs
            ) : (
              <p>No description available</p>
            )}
          </div>
        </div>

        {/* Edit and Delete Buttons (only visible for admin) */}
        {user && (
          <div className="md:px-6 py-2 px-2 flex gap-2">
            <button
              className="p-2 bg-secondary rounded-full text-gray-100 hover:bg-gray-600"
              onClick={() => navigate(`/blog/update/${blog.id}`)}
            >
              <FaEdit />
            </button>

            {/* Delete Blog */}
            <button
              className="p-2 bg-red-500 rounded-full text-gray-100 hover:bg-gray-600"
              onClick={() => deleteBlog(blog?.id)}
              disabled={loading}
            >
              <FaTrashAlt />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlogCard;
