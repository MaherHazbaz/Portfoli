import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { MdOutlineContacts } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SlBriefcase } from "react-icons/sl";
import { RiFolderInfoLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi"; // Corrected import
import { HiX } from "react-icons/hi"; // Corrected import

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left-side Navbar */}
      <div className="h-full md:w-32 bg-transparent text-gray-800 py-5 px-4 flex flex-col ">

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-col space-y-6 mt-10 justify-items-center fixed left-0 top-1/2 transform -translate-y-1/2 pl-6">
          {/* Nav Items */}
          {[
            { to: "/", icon: <GoHome />, label: "Home" },
            { to: "/explore", icon: <CgProfile />, label: "About" },
            { to: "/projects", icon: <SlBriefcase />, label: "Portfolio" },
            { to: "/contact", icon: <MdOutlineContacts />, label: "Contact" },
            { to: "/resume", icon: <RiFolderInfoLine />, label: "Resume" },
          ].map((item, index) => (
            <div key={index} className="group flex flex-col items-center">
              <Link
                to={item.to}
                className="text-3xl text-gray-500 group-hover:text-gray-800 transition"
              >
                {item.icon}
              </Link>
              <span className="mt-2 text-sm text-gray-600 group-hover:text-gray-800 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-300">
                {item.label}
              </span>
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex flex-col items-center w-full relative">
          <button
            className="text-gray-800 text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX /> : <GiHamburgerMenu />}
          </button>

          {isMenuOpen && (
            <nav className="flex flex-col space-y-6 mt-5 items-center bg-transparent py-4 px-6 rounded-none shadow-2xl justify-between">
              {[
                { to: "/", icon: <GoHome />, label: "Home" },
                { to: "/explore", label: "About", icon: <CgProfile /> },
                { to: "/projects", label: "Portfolio", icon: <SlBriefcase /> },
                { to: "/contact", label: "Contact", icon: <MdOutlineContacts /> },
                { to: "/resume", label: "Resume", icon: <RiFolderInfoLine /> },
              ].map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="flex items-center text-lg text-gray-800 hover:text-blue-500 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
