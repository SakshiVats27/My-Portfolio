import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="CGPA Booster"
          main="This is an online learning platform built to help university students in their academics by providing them useful resources."
          url= "https://cgpabooster.in/"
          linkText="View Project"
        />
        <ProjectCard
          title="Moments and Miles"
          main="Moments and Miles is a MERN stack tour booking website with features to book your tour, choose from the featured tours, see reviews and give ratings."
          url= "https://github.com/SakshiVats27/mern-tour-website"
          linkText="View Project"
        />
        <ProjectCard
          title="Weather Forecasting Website"
          main="This website fetches the current weather details of any city across the globe showing maximum and minimum temperature."
          url="https://weather-forecasting-eight.vercel.app/"
          linkText="View Project"
        />
      </div>
    </div>
  );
};

export default Projects;
