import React from "react";
import toast from "react-hot-toast";
import { GoCopy } from "react-icons/go";
import { GrSend } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactHome = () => {
  const navigate = useNavigate();

  // handle copy email
  const email = "manoj.belbasay@gmail.com";
  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(email);
      toast.success("Email copied!");
    } catch (error) {
      toast.error("Failed to copy emial", error);
    }
  };

  // handle call on whatsApp
  const phoneNumber = "9864415071"; // Example for India; replace with your number
  const message = encodeURIComponent(
    "Hello, I would like to get in touch with you!"
  );
  const handleWhatsAppCall = () => {
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="border p-4 md:p-6 rounded-md  flex flex-col gap-5">
      {/* contact heading */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">
          <span className="text-secondary">#</span>contact-me
        </h1>{" "}
        <div className="border w-[40%] border-secondary"></div>
      </div>
      {/* form */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Copy Email */}
        <button
          className="border border-gray-600 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
          onClick={handleCopyEmail}
        >
          <span className="sm:hidden text-sm">Copy</span> {/* Mobile text */}
          <span className="hidden sm:block text-sm sm:text-base">
            Copy Email
          </span>{" "}
          {/* Larger screen text */}
          <GoCopy className="text-gray-400" />
        </button>

        {/* Send Message */}
        <button
          className="border border-gray-600 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          <span className="sm:hidden text-sm">Message</span> {/* Mobile text */}
          <span className="hidden sm:block text-sm sm:text-base">
            Send Message
          </span>{" "}
          {/* Larger screen text */}
          <GrSend className="text-gray-400 text-lg" />
        </button>

        {/* Call on WhatsApp */}
        <button
          className="border border-gray-600 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
          onClick={handleWhatsAppCall}
        >
          <span className="sm:hidden text-sm">Call</span> {/* Mobile text */}
          <span className="hidden sm:block text-sm sm:text-base">
            Call On WhatsApp
          </span>{" "}
          {/* Larger screen text */}
          <IoLogoWhatsapp className="text-gray-400 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ContactHome;
