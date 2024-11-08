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
    <div className="absolute left-12 bottom-0 border bg-primary px-2 py-2 z-20 shadow-lg flex flex-col items-center gap-2 rounded-md">
      <div className="text-white capitalize">
        <h2 className="text-xs md:text-sm flex gap-2 items-center">
          <FaRegUser /> {user?.name}
        </h2>
      </div>
      <button
        onClick={handleLogout}
        className="text-sm flex items-center gap-2 hover:bg-red-500 p-1 rounded-sm"
      >
        <TbLogout2 className="text-xl gap-1" />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default UserProfile;
