import React from "react";
import BlogsContainer from "../Components/Blogs/BlogsContainer";

const Blogs = () => {
  return (
    <div>
      <div className="flex flex-col gap-1 md:mb-6">
        <h1 className="text-3xl font-bold">
          {" "}
          <span className="text-secondary">/</span>blogs
        </h1>
        <span className="text-accent text-sm">List of my Blogs</span>
      </div>
      <BlogsContainer />
    </div>
  );
};

export default Blogs;
