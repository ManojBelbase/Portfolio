import React from "react";
import Hero from "../Components/Hero/Hero";
import AboutMe from "../Components/About/AboutMe";
import ProjectContainer from "../Components/Project/ProjectContainer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />
      <AboutMe />
      <ProjectContainer />
    </div>
  );
};

export default Home;
