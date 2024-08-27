import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact Me</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
          <a href="mailto:sakshi12135@gmail.com" className="text-white no-underline">
            sakshi12135@gmail.com
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/sakshi-vats-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            SakshiVats
          </a>
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/SakshiVats27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white no-underline"
          >
            SakshiVats27
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
