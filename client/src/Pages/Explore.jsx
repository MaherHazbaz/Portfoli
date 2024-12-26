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
import RightNavbar from "../Layouts/RightNavbar";

const Explore = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleNavBar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className="flex flex-col items-start">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 py-9 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-">
            {/* Profile Image */}
            <div className="grid justify-start items-start">
              <PhotoFrame src={pro} />
            </div>

            {/* Text Content */}
            <div className="text-lg md:text-2xl lg:text-3xl font-thin grid justify-start">
              <h1 className="text-5xl font-light text-gray-900 lg:text-left">
                Maher Hazbaz
                <h2 className="text-3xl text-gray-800 font-normal grid justify-center">
                  Developer
                </h2>
              </h1>

              <p className="mt-4 text-2xl">
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
        <div> </div>

        {/* Floating Social Media Navbar */}
        <div>
          <RightNavbar/>
        </div>
      </div>
    </>
  );
};

export default Explore;
