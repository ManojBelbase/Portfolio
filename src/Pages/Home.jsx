import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/About/AboutMe";
import ProjectContainer from "../Components/Project/ProjectContainer";
import { BiArrowToTop } from "react-icons/bi";
import { Link } from "react-router-dom";
import BlogsContainer from "../Components/Blogs/BlogsContainer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 relative">
      <Hero />
      <AboutMe />
      <ProjectContainer />
      <BlogsContainer />
    </div>
  );
};

export default Home;
