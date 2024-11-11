import React from "react";
import { FaTimes } from "react-icons/fa";

const ImagePopup = ({ images, onClose }) => {
  const handleClose = (e) => {
    // Close modal if clicked outside the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleClose} // Close the modal if clicked outside
    >
      <div
        className="border p-4 md:max-w-6xl relative rounded-lg bg-gray-900"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Screenshots Text */}
        <h2 className="text-white text-2xl font-semibold mb-4">Screenshots</h2>

        {/* Loop through all images in the 'images' array and display them */}
        <div className="overflow-x-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images && images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  className="sm:w-96 h-36  md:h-full object-cover rounded-lg shadow-md border"
                />
              ))
            ) : (
              <p className="text-white">No images available</p>
            )}
          </div>
        </div>

        {/* Close button to hide the popup */}
        <button
          onClick={onClose} // Close the popup when clicked
          className="absolute top-2 right-2 bg-transparent text-white p-2 rounded-full hover:bg-red-500"
        >
          <FaTimes className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ImagePopup;
