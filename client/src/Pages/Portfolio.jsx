import React from "react";
import Lottie from "lottie-react";
import Animation from "../Animations/Animation.json";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import FadeTransition from "../Components/FadeTransition";
import { useState } from "react";
import Navbar from "../Layouts/Navbar";
import sea from "../Animations/wvv.json"
const Portfolio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}

        <div className="absolute py- ">
          <Lottie animationData={sea} />
        </div>
        <div className=" flex flex-col items-center relative">
          <Navbar />
        </div>

        <div className="flex-1 text-4xl p-5">
          <div className="grid grid-flow-row">
            <div className="grid justify-start">
              <div className="grid-flow-col justify-start">
                <h1 className="text-9xl font-thin grid justify-start">
                  Welcome to
                </h1>
                <h2 className="text-7xl font-thin grid justify-end">
                  My Portfolio
                </h2>

                <div className="text-8xl font-semibold  justify-start p-10 flex">
                  <p>Hi,</p>
                </div>
                <div className="text-6xl font-thin flex justify-end ">
                  <p>I'm Maher Hazbaz</p>
                </div>
                <div className="grid justify-center animate-slideInUp text-xl py-7">
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
    </>
  );
};

export default Portfolio;
