import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import bird from "../Animations/bird.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";



const Explore = () => {
  const nav = [{ path: "portfolio", icon: <IoArrowBackCircleOutline /> }];
  return (
    <>
      <div className=" w-full absolute h-screen">
        <Lottie animationData={bird} />
      </div>

      <div className="grid justify-items-start py-5 absolute ">
        <div className="text-5xl grid justify- p-5 font-thin ">
          <h1>Maher Hazbaz</h1>
          <h2 className="text-3xl grid justify-end">WebDeveloper</h2>
        </div>
        <div className="grid grid-flow-col sm:grid-cols-2 p-7  text-2xl font-thin justify-center inset-">
          <p>
            Dynamic and ambitious Computer Science Engineering student with a
            passion for problem-solving and innovation. Proficient in multiple
            programming languages like JavaScript, HTML, CSS, React.Js, Node.Js
            .A Strong collaborator with excellent communication skills, and
            ready to contribute to a dynamic team environment. Seeking
            opportunities to gain hands-on experience and make a meaningful
            impact in the tech industry
          </p>
        </div>
        
      </div>
    </>
  );
};

export default Explore;
