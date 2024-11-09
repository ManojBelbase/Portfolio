import React from "react";
import toast from "react-hot-toast";
import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

const UserProfile = ({ setIsProfileOpen }) => {
  const user = JSON.parse(localStorage.getItem("users"));

  const handleLogout = () => {
    toast.success("Logged out successfully");
    setIsProfileOpen(false); // Close the profile popup on logout
    localStorage.removeItem("users");
  };

  return (
    <div className="absolute -left-10 top-10 bg-primary border border-secondary rounded-md shadow-lg px-1 py-1 z-20 flex flex-col items-start gap-2">
      <div className="text-white flex gap-2 w-full items-center border px-2 py-1 rounded-sm">
        <FaRegUser className="text-xl text-secondary" />
        <span className="text-lg font-semibold capitalize">{user?.name}</span>
      </div>
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 text-white py-1 rounded-sm transition-colors duration-200 ease-in-out border px-2 hover:border-red-500"
      >
        <TbLogout2 className="text-2xl text-red-600" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;
