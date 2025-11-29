import BlogsContainer from "../Components/Blogs/BlogsContainer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  return (
    <div className="max-w-[1700px] mx-auto">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-3xl font-bold">
            {" "}
            <span className="text-secondary">/</span>blogs
          </h1>
          <span className="text-accent text-sm">List of my Blogs</span>
        </div>
        {user && (
          <div
            className="flex items-center gap-2 border py-2 px-3 rounded-md cursor-pointer border-secondary"
            onClick={() => navigate("/blog/create")}
          >
            <IoMdAddCircleOutline className="text-xl" />
            <button>Create</button>
          </div>
        )}
      </div>
      <BlogsContainer />
    </div>
  );
};

export default Blogs;
