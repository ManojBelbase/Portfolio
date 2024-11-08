import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/myContext";
import toast from "react-hot-toast";
import { auth, fireDB } from "../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Signup = () => {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

  // User signup state
  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Input chanhe
  const handleChangeInput = (e) => {
    setUserSignup({ ...userSignup, [e.target.name]: e.target.value });
  };
  // User signup function
  const userSignupFunction = async () => {
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      return toast.error("All fields are required");
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      // create user object
      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      // Create User reference
      const userReference = collection(fireDB, "user");

      // add user details
      addDoc(userReference, user);
      setUserSignup({
        name: "",
        email: "",
        password: "",
      });
      toast.success("User Created Successfully");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Signup form */}
      <div className="bg-primary px-6 py-5 border border-white rounded-xl shadow-md w-full max-w-md sm:px-8 sm:py-6">
        {/* Top Heading  */}
        <div className="mb-4 sm:mb-5">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-white">
            Signup Form
          </h2>
        </div>

        {/* Input Username */}
        <div className="mb-3">
          <input
            type="text"
            name="name"
            value={userSignup.name}
            onChange={handleChangeInput}
            placeholder="Full Name"
            className="bg-primary border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent"
          />
        </div>

        {/* Input Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={userSignup.email}
            onChange={handleChangeInput}
            placeholder="Email Address"
            className="bg-primary border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent"
          />
        </div>
        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={userSignup.password}
            onChange={handleChangeInput}
            placeholder="Password"
            className="bg-primary border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent"
          />
        </div>
        {/* Signup button */}
        <div className="mb-4">
          <button
            type="submit"
            className="bg-primary border border-white px-4 text-white  text-center py-2 font-normal rounded-md"
            onClick={userSignupFunction}
          >
            {!loading ? "Signup" : "Please wait"}
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Already Registered?{" "}
            <Link className="text-secondary font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Signup;
