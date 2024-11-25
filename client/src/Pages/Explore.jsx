import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import bird from "../Animations/bird.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import PhotoFrame from "../Components/PhotoFrame";
import profile from "../Images/profile.jpg";
import CustomButton from "../Components/CustomButton";
import Navbar from "../Layouts/Navbar";
import insta from "../Animations/insta.json";
import ima from "../Images/11.jpg"
import pro from "../Images/pro.png"

const Explore = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className=" flex flex-col items-center">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-10 overflow-auto">
          {/* Floating Bird Animation */}
          <div className="absolute top-5 left-5 h-16 w-16">
            <Lottie animationData={bird} />
          </div>

          {/* Main Content Grid */}
          <div className="flex flex-auto gap-28">
            {/* Profile Image */}
            <div className="flex justify-center items-center">
              <PhotoFrame src={pro} />
            </div>
            {/* Text Content */}
            <div className="text-lg md:text-2xl lg:text-3xl font-thin">
              <h1 className="text-5xl font-light ">Maher Hazbaz</h1>
              <h2 className="text-2xl mt-2">Web Developer</h2>
              <p className="mt-5">
                Dynamic and ambitious Software Engineer with a passion for
                problem-solving and innovation. Proficient in multiple
                programming languages like JavaScript, HTML, CSS, React.js,
                Node.js. A strong collaborator with excellent communication
                skills, and ready to contribute to a dynamic team environment.
                Seeking opportunities to gain hands-on experience and make a
                meaningful impact in the tech industry.
              </p>

              <a
                href="https://www.instagram.com/maherhazbaz?igsh=bHpha2VwZ2l6NGUz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-5"
              >
                <Lottie animationData={insta} className="h-100 w-60" loop />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
