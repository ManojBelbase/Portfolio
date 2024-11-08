import React, { useContext, useState } from "react";
import myContext from "../context/myContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../firebase/FirebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const { loading, setLoading } = useContext(myContext);
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChangeInput = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  // User login function
  const userLoginFunction = async () => {
    if (userLogin.email === "" || userLogin.password === "") {
      return toast.error("All fields are required");
    }

    setLoading(true);
    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDB, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          setLoading(false);
          navigate("/");
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Login is restricted to owner.");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="bg-primary px-6 py-5 border border-white rounded-xl shadow-md w-full max-w-md sm:px-8 sm:py-6">
        {/* Top Heading */}
        <div className="mb-4 sm:mb-5">
          <h2 className="text-center text-xl sm:text-2xl font-bold text-white">
            Login Form
          </h2>
        </div>
        {/* Input Email */}
        <div className="mb-3">
          <input
            type="email"
            name="email"
            value={userLogin.email}
            onChange={handleChangeInput}
            placeholder="Email Address"
            className="bg-primary border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent"
          />
        </div>
        {/* Input Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            value={userLogin.password}
            onChange={handleChangeInput}
            placeholder="Password"
            className="bg-primary border border-white px-3 py-2 w-full rounded-md outline-none placeholder-accent"
          />
        </div>
        {/* Login Button */}
        <div className="mb-4">
          <button
            type="button"
            className="bg-primary border border-white px-4 w-full text-white text-center py-2 font-normal rounded-md"
            onClick={userLoginFunction}
          >
            {!loading ? "Login" : "Please wait..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
