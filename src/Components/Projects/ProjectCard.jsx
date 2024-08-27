import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const ProjectCard = ({ title, main, url, linkText }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={bannerImg} alt={title} />
      <div className="flex flex-col flex-grow">
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
          {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2 flex-grow">
          {main}
        </p>
      </div>
      <div className="p-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white py-2 px-4 text-sm md:text-lg font-semibold rounded-3xl bg-[#465697] hover:opacity-85 duration-300 hover:scale-105 text-center block"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
