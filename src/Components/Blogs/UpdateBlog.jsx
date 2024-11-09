import React, { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, setDoc, Timestamp } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const UpdateBlog = () => {
  const { loading, setLoading, getAllBlogsFunction } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // Blog state
  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    author: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // handle change function
  const handleInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  // get Single Blog function
  const getSingleBlogFunction = async () => {
    setLoading(true);
    try {
      const blogTemp = await getDoc(doc(fireDB, "blog", id));
      const blog = blogTemp.data();

      setBlog({
        title: blog?.title,
        category: blog?.category,
        description: blog?.description,
        image: blog?.image,
        author: blog?.author,
        time: blog?.time,
        date: blog?.date,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // update Blog function
  const handleUpdateBlog = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
    setLoading(true);
    try {
      await setDoc(doc(fireDB, "blog", id), blog);
      toast.success("Blog updated successfully");
      getAllBlogsFunction();
      setLoading(false);
      navigate(`/`);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleBlogFunction();
  }, []);

  return (
    <div className="p-4 min-w-lg mx-auto bg-primary rounded-md border shadow-lg text-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Blog</h2>
      <form className="space-y-4" onSubmit={handleUpdateBlog}>
        {/* Title */}
        <div>
          <label className="block text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Category */}
        <div>
          <label className="block text-gray-300">Category</label>
          <input
            type="text"
            name="category"
            value={blog.category}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Image */}
        <div>
          <label className="block text-gray-300">Image</label>
          <input
            type="text"
            name="image"
            value={blog.image}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Author */}
        <div>
          <label className="block text-gray-300">Author</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-gray-300">Description</label>
          <textarea
            name="description"
            value={blog.description}
            onChange={handleInputChange}
            placeholder="Enter blog description"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#21d764] text-white p-2 rounded hover:bg-secondary transition"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Update Blog"}
        </button>
      </form>
    </div>
  );
};

export default UpdateBlog;
