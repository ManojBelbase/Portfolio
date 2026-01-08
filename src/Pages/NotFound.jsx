import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-primary text-accent px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-9xl font-bold text-secondary">404</h1>
        <h2 className="text-3xl font-semibold mt-4 text-white">Oops! Page not found</h2>
        <p className="mt-4 text-lg max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Go Back Home
        </Link>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <div className="absolute top-[10%] left-[20%] w-64 h-64 bg-secondary rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-secondary rounded-full filter blur-[150px]"></div>
      </div>
    </div>
  );
};

export default NotFound;
