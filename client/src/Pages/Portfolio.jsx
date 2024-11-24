import React from "react";
import Lottie from "lottie-react";
import Animation from "../Animations/Animation.json";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";
import FadeTransition from "../Components/FadeTransition";
import { useState } from "react";
import Navbar from "../Layouts/Navbar";
const Portfolio = () => {
  const [show, setShow] = useState(true);

  return (
    <>
    <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className=" flex flex-col items-center">
          <Navbar />
        </div>
        
      
        
        <div className="flex-1 text-4xl p-5">
          
            <div className="grid grid-flow-row">
              <div className="grid justify-center">
                <div className="grid-flow-col justify-center">
                  <h1 className="text-6xl font-thin grid justify-center">
                    Welcome to
                  </h1>
                  <h2 className="text-3xl font-thin grid justify-end">
                    My Portfolio
                  </h2>
                  <div>
                    <Lottie animationData={Animation} />
                  </div>
                  <div className="text-4xl font-thin grid justify-center py-5">
                    <p>Hi, I'm Maher Hazbaz</p>
                  </div>
                  <div className="grid justify-center animate-slideInUp text-xl py-2">
                    <Link to={"/explore"}>
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
