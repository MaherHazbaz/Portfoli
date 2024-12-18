import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import PhotoFrame from "../Components/PhotoFrame";
import Navbar from "../Layouts/Navbar";
import pro from "../Images/pro.png";
import linkedin from "../Animations/linkedin.json";
import instagram from "../Animations/instagram.json";
import gmail from "../Animations/gmail.json";
import github from "../Animations/github.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className="flex flex-col items-center">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 py-9 overflow-auto">
          <div className="grid grid-flow-col gap-10">
            {/* Profile Image */}
            <div className="flex justify-center items-start">
              <PhotoFrame src={pro} />
            </div>

            {/* Text Content */}
            <div className="text-lg md:text-2xl lg:text-3xl font-thin">
              <h1 className="text-5xl font-light">
                Maher Hazbaz
                <h2 className="text-3xl mt-2 px-56 text-gray-800 font-normal ">
                  Developer
                </h2>
              </h1>

              <p className="mt-8 text-2xl">
                Hi, I’m Maher Hazbaz, a passionate and detail-oriented Computer
                Science Engineering student at DMI Engineering College, Anna
                University, set to graduate in 2025 with a current CGPA of 8.13.
                My journey in tech revolves around crafting intuitive and
                visually appealing user experiences through my expertise in
                UI/UX design and web development. I have hands-on experience in
                MERN Stack and Three.js, coupled with internship projects in
                Android application development with IoT and web development. My
                portfolio includes innovative projects like a hospital
                appointment scheduling system, a virtual garden website, and an
                e-commerce platform. I thrive in building responsive and
                interactive interfaces using React.js and Tailwind CSS,
                continuously pushing boundaries with 3D models and animations.
                My focus is on delivering seamless user experiences and
                leveraging modern technologies to solve real-world problems.{" "}
                <br />
                <br />
                <p className="text-2xl font-semibold text-gray-800">
                  Let’s create something amazing together!
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* Floating Social Media Navbar */}
        <div
          className={`fixed bottom-7 right-5 bg-gray-800 border-white border text-white rounded-l-full shadow-lg p-4 transition-transform duration-500 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex space-x-7">
            {/* Social Links */}
            <div className="relative group flex flex-col items-end">
              <a
                href="https://www.linkedin.com/in/maher-hazbaz-4949832ba"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Lottie
                  animationData={linkedin}
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                  loop
                />
              </a>
              <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                LinkedIn
              </span>
            </div>
            <div className="relative group flex flex-col items-end">
              <a
                href="https://www.instagram.com/maherhazbaz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Lottie
                  animationData={instagram}
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                  loop
                />
              </a>
              <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Instagram
              </span>
            </div>

            <div className="relative group flex flex-col items-end">
              <a
                href="mailto:maherhazbaz7@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Lottie
                  animationData={gmail}
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                  loop
                />
              </a>
              <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Gmail
              </span>
            </div>

            <div className="relative group flex flex-col items-end">
              <a
                href="https://github.com/MaherHazbaz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Lottie
                  animationData={github}
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                  loop
                />
              </a>
              <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                GitHub
              </span>
            </div>

            <div className="relative group flex flex-col items-end">
              <a
                href="https://www.instagram.com/maherhazbaz"
                target="_blank"
                rel="noopener noreferrer"
                className="relative"
              >
                <Lottie
                  animationData={instagram}
                  className="h-12 w-12 transform transition-transform duration-300 group-hover:scale-110"
                  loop
                />
              </a>
              <span className="mt-2 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Instagram
              </span>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          onClick={toggleNavBar}
          className="fixed bottom-14 right-9 z-10 bg-gray-800 border-2 border-white text-white rounded-full p-4 shadow-lg focus:outline-none hover:bg-gray-700 hover:border-1 hover:border-white transition"
        >
          <IoArrowBackCircleOutline
            className={`text-3xl transform transition-transform duration-300 ${
              isVisible ? "-rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Explore;
