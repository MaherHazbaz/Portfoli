import React from "react";
import Lottie from "lottie-react";
import Animation from "../Animations/Animation.json";
import CustomButton from "../Components/CustomButton";
import { Link } from "react-router-dom";




const Portfolio = () => {
  return (
    <>
      <div className="grid grid-flow-row">
        <div className=" grid  justify-center p-5">
          <div>
            <h1 className="text-6xl font-thin grid justify-center">
              Welcome to{" "}
            </h1>
            <h2 className="text-3xl font-thin grid justify-end ">
              My Portfolio
            </h2>
            <Lottie animationData={Animation} />
            <div className="text-4xl font-thin grid  justify-center py-5 ">
              <p>Hi I'm Maher Hazbaz</p>
            </div>
            <div className="grid justify-center animate-bounce py-2">
              <Link to={"/explore"}>
                <CustomButton button={"Explore More"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Portfolio;
