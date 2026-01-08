import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="border border-gray-700 rounded-md sm:rounded-2xl shadow-md overflow-hidden hover:shadow-lg shadow-gray-700 transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Image Section */}
      <Link
        to={`/blog/${blog?.id}`}
        className="relative h-44 sm:h-52 w-full overflow-hidden block"
      >
        <img
          src={blog?.image}
          alt={blog?.title}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 text-[10px] sm:text-xs px-2 py-1 rounded-full bg-primary border border-secondary text-white">
          {blog?.category}
        </div>
      </Link>

      {/* Description Section */}
      <div className="p-3 sm:p-4 flex flex-col gap-2 flex-grow">
        {/* Date and Reading Time */}
        <div className="flex items-center text-accent text-[10px] sm:text-xs gap-2">
          <p>{blog?.date}</p>
          <span className="h-1 w-1 bg-secondary rounded-full"></span>
          <p>2 mins read</p>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-white line-clamp-1">
          {blog?.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-accent line-clamp-2 leading-relaxed">
          {blog?.description}
        </p>

        {/* Read More Link / Button */}
        <div className="mt-auto pt-2">
          <Link
            to={`/blog/${blog?.id}`}
            className="inline-flex items-center gap-2 text-white border-secondary border py-1.5 px-4 transition-all duration-200 rounded-md text-xs sm:text-sm hover:bg-secondary hover:text-primary font-medium group"
          >
            <span>Read More</span>
            <BsArrowRight className="text-base group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
