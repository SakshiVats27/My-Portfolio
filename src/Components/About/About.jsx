import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-start md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div className="md:w-1/3 flex flex-col items-center md:items-start mb-8 md:mb-0">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
        <img className="w-full md:h-80 object-cover rounded-lg" src={AboutImg} alt="About img" />
      </div>

      <div className="md:w-2/3 flex flex-col md:flex-row md:space-x-8">
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Skills</h3>
          <ul className="list-disc list-inside text-sm md:text-md space-y-2">
            <li><strong>Languages :</strong> C++, Python, C</li>
            <li><strong>Problem-Solving :</strong> Data Structure & Algorithms</li>
            <li><strong>Tech Skills :</strong> HTML, CSS, JavaScript (Used extensively in various projects), React Js, Node Js</li>
            <li><strong>Database Management System :</strong> SQL</li>
            <li><strong>Tools :</strong> MySQL, MongoDb, Microsoft Office Suite,Excel, Power Apps, Visual
            Studio</li>
            <li><strong>Soft Skills :</strong> Demonstrated Leadership, Effective Communication, Problem solving, Good Analytical Skills</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Interests</h3>
          <ul className="list-disc list-inside text-sm md:text-md space-y-2">
            <li><strong>Software Developer Enthusiast</strong>
            <ul>
            <li>Willing to work as Software Engineer having experience in programming 
            skills such as C++,Python,SQL,HTML,CSS,Javascript, React, Nodejs and problem-solving.</li>
        </ul>
            </li>
            <li><strong>Frontend Developer</strong>
            <ul>
              <li>Proficiency in HTML, CSS, React and JavaScript:
              Building responsive and accessible web designs from the ground up.</li>
            </ul>
            </li>
            <li><strong>Backend developer</strong>
            <ul>
              <li>
              Proficiency in Server-Side Languages:Node.js.</li>
              <li>Database Management: Experience with both SQL (e.g., MySQL) and NoSQL (e.g., MongoDB) databases for effective data storage and retrieval.</li>
              </ul>
              </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
