
const Loader = () => {
  return (
    <div className="relative border border-gray-800 rounded-lg shadow-xl w-full overflow-hidden bg-gray-900/40 backdrop-blur-md group transition-all duration-300 hover:border-secondary/30">
      {/* Shimmer overlay */}
      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-20"></div>

      {/* Image Loader Section */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {/* Abstract shape in image area */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-secondary/10 rounded-full animate-pulse"></div>
      </div>

      {/* Description Loader Section */}
      <div className="p-4 space-y-4">
        {/* Date and Reading Time Loader */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-2 bg-gray-800 rounded-full"></div>
          <span className="h-1 w-1 bg-gray-700 rounded-full"></span>
          <div className="w-16 h-2 bg-gray-800 rounded-full"></div>
        </div>

        {/* Title Loader */}
        <div className="w-3/4 h-5 bg-gray-700/50 rounded-md"></div>

        {/* Description Loader */}
        <div className="space-y-2">
          <div className="w-full h-3 bg-gray-800/80 rounded-full"></div>
          <div className="w-5/6 h-3 bg-gray-800/80 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

const LoaderContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Loader key={index} />
      ))}
    </div>
  );
};

export default LoaderContainer;
