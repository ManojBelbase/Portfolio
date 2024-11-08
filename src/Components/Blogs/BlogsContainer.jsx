import React, { useState } from "react";
import { blogsData } from "./BlogsData";
import BlogCard from "./BlogCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const BlogsContainer = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hideBlogsPath = "/blogs";
  return (
    <div className="border md:p-6 p-4 rounded-md  flex flex-col gap-5">
      <div className="flex items-center justify-between">
        {location.pathname !== hideBlogsPath && (
          <div className="w-[80%]  flex items-center gap-2">
            <h1 className="sm:text-xl font-semibold text-lg">
              <span className="text-secondary ">#</span>
              recent-blogs
            </h1>
            <p className="border w-[50%] border-secondary"></p>
          </div>
        )}
        {/* view all button on desktop view */}
        {location.pathname !== hideBlogsPath && (
          <button
            className={`hidden border px-2 py-2 rounded-md md:flex gap-1 items-center `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/blogs")}
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
      {/* Displaying  */}
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {blogsData.length > 0 && location.pathname !== hideBlogsPath
          ? blogsData
              .slice(0, 3)
              .map((blog, i) => <BlogCard key={i} blog={blog} />)
          : blogsData.map((blog, key) => {
              return <BlogCard key={key} blog={blog} />;
            })}
      </div>
      {/* display view all in mobile view */}
      <div className="md:hidden">
        {location.pathname !== hideBlogsPath && (
          <button
            className={` border px-2 py-2 rounded-md flex gap-1 items-center `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/blogs")}
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

export default BlogsContainer;
