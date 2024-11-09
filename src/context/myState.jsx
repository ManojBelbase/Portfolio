import React, { useEffect, useState } from "react";
import myContext from "./myContext";
import { fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
const MyState = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [getAllBlogs, setGetAllBlogs] = useState([]);
  // Getting all blogs
  const getAllBlogsFunction = async () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "blog"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let blogArray = [];
        QuerySnapshot.forEach((doc) => {
          blogArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllBlogs(blogArray);
        setLoading(false);
      });

      return () => data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  //

  useEffect(() => {
    getAllBlogsFunction();
  }, []);
  return (
    <myContext.Provider
      value={{
        loading,
        setLoading,
        getAllBlogs,
        getAllBlogsFunction,
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default MyState;
