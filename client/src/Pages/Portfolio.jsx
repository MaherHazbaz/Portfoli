import React from "react";
import Lottie from "lottie-react";
import Animation from "../Animations/Animation.json";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import FadeTransition from "../Components/FadeTransition";
import { useState } from "react";
import Navbar from "../Layouts/Navbar";
import sea from "../Animations/wvv.json";

const Portfolio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="flex h-screen">
        {/* Full-screen Background Animation */}
       

        {/* Left-side Navbar */}
        <div className="flex flex-col items-center relative z-10 ">
          <Navbar />
        </div>

        {/* Main Content */}
       <div className="h-screen sm:h-auto flex items-center justify-center">
  <div className="flex-1 text-4xl p-5 relative z-10">
    <div className="grid grid-flow-row">
      <div className="grid justify-start">
        <div className="grid-flow-col justify-center">
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-thin grid justify-start">
            Welcome to
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-thin grid justify-end mt-2">
            My Portfolio
          </h2>

          {/* Greeting */}
          <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-gray-800 justify-start p-5 sm:p-7 md:p-10 flex">
            <p>Hi,</p>
          </div>

          {/* Name */}
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-thin flex justify-end mt-3">
            <p>I'm Maher Hazbaz</p>
          </div>

          {/* Button */}
          <div className="grid justify-center animate-slideInUp text-base sm:text-lg md:text-xl lg:text-2xl py-4 sm:py-6 md:py-7">
            <Link to={"/projects"}>
              <CustomButton
                onClick={() => setShow(!show)}
                button={"Explore More"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="absolute bottom-0">
          <Lottie
            animationData={sea}
            className="w-full h-full object-bottom"
          />
        </div>


      </div>
    </>
  );
};

export default Portfolio;
