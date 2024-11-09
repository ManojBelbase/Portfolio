import { useContext } from "react";
import myContext from "../../context/myContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useDeleteBlog = () => {
  const navigate = useNavigate();
  const { loading, setLoading, getAllBlogsFunction } = useContext(myContext);

  const deleteBlog = async (id) => {
    // Show confirmation dialog before deleting
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this blog?"
    );
    if (!isConfirmed) {
      return; // Exit if user cancels
    }

    setLoading(true);
    try {
      await deleteDoc(doc(fireDB, "blog", id));
      toast.success("Blog Deleted Successfully");
      navigate("/blogs");
      getAllBlogsFunction();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete blog");
    } finally {
      setLoading(false);
    }
  };

  return { deleteBlog, loading };
};

export default useDeleteBlog;
