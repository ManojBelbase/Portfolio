import React from "react";

const Loader = () => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md w-full sm:w-80 overflow-hidden animate-pulse">
      {/* Image Loader Section */}
      <div className="relative h-48 sm:h-56 bg-gray-700"></div>

      {/* Description Loader Section */}
      <div className="p-3 sm:p-4">
        {/* Date and Reading Time Loader */}
        <div className="flex items-center gap-2 mb-1 sm:mb-2">
          <div className="w-16 h-3 bg-gray-600 rounded-md"></div>
          <span className="h-1 w-1 bg-gray-500 rounded-full"></span>
          <div className="w-16 h-3 bg-gray-600 rounded-md"></div>
        </div>

        {/* Title Loader */}
        <div className="w-3/4 h-4 bg-gray-600 rounded-md mb-2 sm:mb-3"></div>

        {/* Description Loader */}
        <div className="space-y-1">
          <div className="w-full h-3 bg-gray-600 rounded-md"></div>
          <div className="w-5/6 h-3 bg-gray-600 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

const LoaderContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <Loader />
          <div className="mt-4 space-y-3">
            {/* Title Loader */}
            <div className="h-4 bg-gray-600 rounded-md w-3/4"></div>
            {/* Author Loader */}
            <div className="h-3 bg-gray-500 rounded-md w-1/2"></div>
            {/* Date and Time Loader */}
            <div className="h-2 bg-gray-500 rounded-md w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoaderContainer;
