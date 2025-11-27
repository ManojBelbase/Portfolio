import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/About/AboutMe";
import ProjectContainer from "../Components/Project/ProjectContainer";
import BlogsContainer from "../Components/Blogs/BlogsContainer";
import ContactHome from "../Components/Contact/ContactHome";
// import Loader from "../Components/Loader/Loader";
const Home = () => {
  return (
    <div className="flex flex-col gap-4 relative max-w-[1700px] mx-auto">
      <Hero />
      <AboutMe />
      <ProjectContainer />
      <BlogsContainer />
      <ContactHome />
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
