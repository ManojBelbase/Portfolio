import React, { useContext, useState } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router-dom";
import { serverTimestamp, Timestamp } from "firebase/firestore"; // Import serverTimestamp
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";

const AddBlog = () => {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: "",
    author: "",

    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (
      formData.title === "" ||
      formData.category === "" ||
      formData.description === "" ||
      formData.image === "" ||
      formData.author === ""
    ) {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const blogRef = collection(fireDB, "blog");
      await addDoc(blogRef, {
        ...formData,
        time: serverTimestamp(), // Use server-generated timestamp here
      });
      toast.success("Blog added successfully");
      navigate("/blogs");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 min-w-lg mx-auto bg-primary rounded-md border shadow-lg text-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-300">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Category */}
        <div>
          <label className="block text-gray-300">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter blog category"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block text-gray-300">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter blog description"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100 h-24 resize-none"
          />
        </div>
        {/* Image URL */}
        <div>
          <label className="block text-gray-300">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Enter image URL"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>
        {/* Author */}
        <div>
          <label className="block text-gray-300">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full p-2 border border-gray-700 rounded bg-black text-gray-100"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#21d764] text-white p-2 rounded hover:bg-secondary transition"
          disabled={loading}
        >
          {loading ? "Adding Blog..." : "Add Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
