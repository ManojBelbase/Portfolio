import React from "react";
import toast from "react-hot-toast";
import { GoCopy } from "react-icons/go";
import { GrSend } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdCall, MdEmail } from "react-icons/md";

const ContactHome = () => {
  const navigate = useNavigate();

  // handle copy email
  const email = "manojbelbase56@gmail.com";
  const handleCopyEmail = () => {
    try {
      navigator.clipboard.writeText(email);
      toast.success("Email copied!");
    } catch (error) {
      toast.error("Failed to copy emial", error);
    }
  };

  // handle call on whatsApp
  const phoneNumber = "9864415071"; 
  const message = encodeURIComponent(
    "Hello, I would like to get in touch with you!"
  );
  const handleWhatsAppCall = () => {
    window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleDirectEmail = () => {
  const subject = encodeURIComponent("Hello Manoj");
  const body = encodeURIComponent(
    "Hi Manoj,\n\nI would like to get in touch with you.\n\nThanks!"
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
};

const handleDirectCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};



  return (
    <div className="border border-gray-700 p-4 md:p-6 rounded-md sm:rounded-2xl  flex flex-col gap-5">
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
          <span className="sm:hidden text-sm"></span> {/* Mobile text */}
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
          <span className="sm:hidden text-sm"></span> {/* Mobile text */}
          <span className="hidden sm:block text-sm sm:text-base">
            Send Message
          </span>{" "}
          {/* Larger screen text */}
          <GrSend className="text-gray-400 text-lg" />
        </button>

        {/* Call on WhatsApp */}
        <button
          className="border border-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
          onClick={handleWhatsAppCall}
        >
          <span className="sm:hidden text-sm"></span> {/* Mobile text */}
          <span className="hidden sm:block text-sm sm:text-base">
WhatsApp Chat
          </span>{" "}
          {/* Larger screen text */}
          <IoLogoWhatsapp className="text-gray-400 text-lg" />
        </button>
        {/* Direct Email */}
<button
  className="border border-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
  onClick={handleDirectEmail}
>
  <span className="sm:hidden text-sm"></span>
  <span className="hidden sm:block text-sm sm:text-base">
    Email Me
  </span>
  <MdEmail className="text-gray-400 text-lg" />
</button>

{/* Direct Phone Call */}
<button
  className="border border-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-md w-full sm:w-auto inline-flex items-center gap-2 text-gray-300 shadow-md bg-primary hover:bg-gray-900 transition duration-200 cursor-pointer"
  onClick={handleDirectCall}
>
  <span className="sm:hidden text-sm"></span>
  <span className="hidden sm:block text-sm sm:text-base">
    Call Me
  </span>
  <MdCall className="text-gray-400 text-lg" />
</button>


      </div>
    </div>
  );
};

export default ContactHome;
