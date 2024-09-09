import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import bird from "../Animations/bird.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import PhotoFrame from "../Components/PhotoFrame";
import profile from "../Images/profile.jpg";
import CustomButton from "../Components/CustomButton";

import insta from "../Animations/insta.json";


const Explore = () => {
  const nav = [{ path: "portfolio", icon: <IoArrowBackCircleOutline /> }];
  return (
    <>
    <div className="absolute h-25 w-25">
      <Lottie animationData={""}/>
    </div>
      <div className="grid grid-flow-row justify-items-end py-5 absolute  ">
        <div className="text-7xl grid sm:grid-cols-1 md:grid-cols-2 justify-end p-7 font-thin  ">
          <div className="">
            <h1 className="animate-slideInDown">Maher Hazbaz</h1>
            <h2 className="text-3xl grid justify-items-center ">
              WebDeveloper
            </h2>
            <div className="grid justify-start lg:grid-cols-1 space-x-28 p-6  text-3xl font-thin space-y- ">
              <div className="grid grid-flow-row  ">
                <p>
                  Dynamic and ambitious Software Engineer with a passion for
                  problem-solving and innovation. Proficient in multiple
                  programming languages like JavaScript, HTML, CSS, React.Js,
                  Node.Js .A Strong collaborator with excellent communication
                  skills, and ready to contribute to a dynamic team environment.
                  Seeking opportunities to gain hands-on experience and make a
                  meaningful impact in the tech industry.
                </p>
              </div>
              <Link to={"/know"}>
                <div className="text-xl py-8 grid justify-center a">
                  <CustomButton button={"Get To Know More !"} />
                </div>
              </Link>
              <a href="https://www.instagram.com/maherhazbaz?igsh=bHpha2VwZ2l6NGUz">
                <button className="flex items-start  ">
                  <div className="py-5 text-2xl">Follow me On Instagram</div>
                  <div className="size-52  ">
                    <Lottie animationData={insta} />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="grid justify text-6xl relative -mt-40 transition-transform animate-fadeIn">
            <PhotoFrame src={profile} />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Explore;
