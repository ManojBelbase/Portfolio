import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import myContext from "../../context/myContext";
import SingleBlogCard from "./SingleBlogCard";
import { IoArrowBack } from "react-icons/io5";

const SingleBlogContainer = () => {
  const { getAllBlogs } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div
          className="border px-2 py-1 text-white hover:border-secondary rounded-sm inline-flex items-center gap-2 my-2 cursor-pointer"
          onClick={() => navigate("/blogs")}
        >
          <IoArrowBack className="text-2xl" />
          <span>Back</span>
        </div>
      </div>
      <div className=" ">
        {getAllBlogs.length > 0 &&
          getAllBlogs.map((blog) => {
            if (id === blog.id) {
              return <SingleBlogCard key={blog?.id} blog={blog} />;
            }
          })}
      </div>
    </div>
  );
};

export default SingleBlogContainer;
