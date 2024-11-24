import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineContacts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlBriefcase } from "react-icons/sl";
import { RiFolderInfoLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <>
      <div className="flex h-screen ">
        {/* Left-side Navbar */}
        <div className="h-full bg-transparent text-gray-400 py-10 px-5 flex flex-col items-center justify-center">
          <nav className="space-y-6">
            {/* Nav Items */}
            <div className="group flex flex-col items-center">
              <Link
                to="/"
                className="text-3xl group-hover:text-gray-700 transition"
              >
                <GoHome />
              </Link>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                Home
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                to="/explore"
                className="text-3xl group-hover:text-gray-700 transition"
              >
                <CgProfile />
              </Link>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                About
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                to="/projects"
                className="text-3xl group-hover:text-gray-700 transition"
              >
                <SlBriefcase />
              </Link>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                Portfolio
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                to="/contact"
                className="text-3xl group-hover:text-gray-700 transition"
              >
                <MdOutlineContacts />
              </Link>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                Contact
              </span>
            </div>
            <div className="group flex flex-col items-center">
              <Link
                to="/resume"
                className="text-3xl group-hover:text-gray-700 transition"
              >
                <RiFolderInfoLine />
              </Link>
              <span className="mt-2 text-sm text-gray-400 group-hover:text-gray-700 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                Resume
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
