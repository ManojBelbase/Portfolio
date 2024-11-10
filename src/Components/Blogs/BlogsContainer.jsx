import React, { useContext, useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import myContext from "../../context/myContext";
import Loader from "../Loader/Loader";

const BlogsContainer = () => {
  const { getAllBlogs, loading } = useContext(myContext);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const hideBlogsPath = "/blogs";

  // displaying 4 blogs when screen size is greater than 1500px
  const [blogsCount, setBlogsCount] = useState(3);
  useEffect(() => {
    const updateBlogsCount = () => {
      if (window.innerWidth >= 1536) {
        setBlogsCount(4);
      } else {
        setBlogsCount(3);
      }
    };
    updateBlogsCount();
    window.addEventListener("resize", updateBlogsCount);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateBlogsCount);
    };
  }, []);

  return (
    <div
      className={`${
        location.pathname !== hideBlogsPath && "border md:p-6 p-2"
      } rounded-md flex flex-col gap-2 md:gap-5`}
    >
      {/* Display on mobile */}
      <div className="flex items-center justify-between">
        {location.pathname !== hideBlogsPath && (
          <div className="w-[80%] flex items-center gap-2">
            <h1 className="sm:text-xl font-semibold text-lg">
              <span className="text-secondary">#</span>recent-blogs
            </h1>
            <p className="hidden md:block border w-[50%] border-secondary"></p>
          </div>
        )}
        {/* View all button on desktop view */}
        {location.pathname !== hideBlogsPath && (
          <button
            className={`hidden border px-2 py-2 rounded-md md:flex gap-1 items-center`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/blogs")}
          >
            <span className="">View All</span>
            <BsArrowRight
              className={`${
                isHovered ? "-rotate-45" : ""
              } text-2xl text-secondary transition-transform`}
            />
          </button>
        )}
      </div>
      {/* Displaying in home and project page */}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-2 md:gap-5">
          {getAllBlogs.length > 0 && location.pathname !== hideBlogsPath
            ? getAllBlogs
                .slice(0, blogsCount)
                .map((blog, i) => <BlogCard key={i} blog={blog} />)
            : getAllBlogs.map((blog, key) => {
                return <BlogCard key={key} blog={blog} />;
              })}
        </div>
      )}
      {/* Display view all in mobile view */}
      <div className="md:hidden">
        {location.pathname !== hideBlogsPath && (
          <button
            className={`border px-2 py-1 md:py-2 rounded-sm md:rounded-md flex gap-1 items-center`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate("/blogs")}
          >
            <span className="text-sm md:text-base">View All</span>
            <BsArrowRight
              className={`${
                isHovered ? "-rotate-45" : ""
              } md:text-2xl text-xl text-secondary transition-transform`}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogsContainer;
