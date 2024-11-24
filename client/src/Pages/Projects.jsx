import React from 'react'
import { Link } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import vg from "../Images/vg.jpg"
import ec from "../Images/ec.jpg"
import ap from "../Images/ap.jpg"
import vs from "../Images/vs.jpg"

const Frame = ({ imageUrl, link, label }) => (
  <div className="text-center">
    <div className="p-2 rounded-lg  drop-shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out ">
      <div className="border-2 border-gray-200 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-lg shadow-md hover:shadow-lg hover:backdrop-blur-xl transition-all duration-300">
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-48 object-cover rounded-none mb-2 "
        />
        <Link to={link}>
          <button className="w-full bg-transparent border-t-2 border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-slate-50 transition-all duration-300 py-2">
            {label}
          </button>
        </Link>
      </div>
    </div>
  </div>
);
const Projects = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className=" flex flex-col items-center">
          <Navbar />
        </div>

        <div className="p-7 text-3xl">
          <h1>Projects</h1>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-10 sm:p-14 justify-items-center text-2xl sm:text-3xl font-thin rounded-lg">
            <Frame imageUrl={vg} label={"Virtual Garden"} />
            <Frame imageUrl={ec} label={"E-Commerce Website"} />
            <Frame imageUrl={ap} label ={"HASS"}  />
            <Frame imageUrl={vs} label={"Vision Mate"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects