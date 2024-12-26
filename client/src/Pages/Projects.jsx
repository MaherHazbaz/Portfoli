import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Layouts/Navbar";
import vg from "../Images/vg.jpg";
import ec from "../Images/ec.jpg";
import ap from "../Images/ap.jpg";
import vs from "../Images/vs.jpg";
import re from "../Images/re.jpg";
import js from "../Images/js.jpg";
import no from "../Images/no.jpg";
import mo from "../Images/mo.jpg";
import iot from "../Images/iot.jpg";
import web from "../Images/web.jpg";
import uiux from "../Images/UIUX.jpg";
import nptel from "../Images/NPTEL.jpg";
import java from "../Images/java.jpg";

const Frame = ({ imageUrl, link, label }) => (
  <div className="text-center">
    <div className="p-2 rounded-lg drop-shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="border-2 border-gray-200 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-lg shadow-md hover:shadow-lg hover:backdrop-blur-xl transition-all duration-300">
        <img
          src={imageUrl}
          alt={label}
          className="w-full h-48 object-cover rounded-none mb-2"
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
    <div className="grid grid-flow-col md:flex-row h-screen">
      {/* Left-side Navbar */}
      <div className="  bg-transparent">
        <Navbar />
      </div>

      {/* Main Content with top margin */}
      <div className=" px-5 sm:px-10 lg:px-10 mt-10">
        {/* Skills Section */}
        <div className="text-3xl mb-10">
          <h1>Skills</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Frame imageUrl={js} label={"JavaScript"} />
            <Frame imageUrl={re} label={"React.js"} />
            <Frame imageUrl={no} label={"Node.js"} />
            <Frame imageUrl={mo} label={"MongoDB"} />
          </div>
        </div>

        {/* Projects Section */}
        <div className="text-3xl mb-10">
          <h1>Projects</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/vg">
              <Frame
                imageUrl={vg}
                label={
                  "Virtual Garden Website for Medicinal Plants for educational purposes(Smart India Hackathon)"
                }
              />
            </Link>
            <Link to="/ec">
              <Frame
                imageUrl={ec}
                label={
                  "E-Commerce Website (Scalable e-commerce website with dynamic product data management)"
                }
              />
            </Link>
            <Link to="/ap">
              <Frame
                imageUrl={ap}
                label={
                  "Optimizing Hospital Appointment Scheduling System using RFID tags, facial recognition, and AI"
                }
              />
            </Link>
            <Link to="/vs">
              <Frame
                imageUrl={vs}
                label={
                  "VisionMate: Enhancing Accessibility for the Visually Impaired with Real-Time Object Detection"
                }
              />
            </Link>
          </div>
        </div>

        {/* Internships Section */}
        <div className="text-3xl mb-10">
          <h1>Internships</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Frame
              imageUrl={iot}
              label={"Android Application Development with IoT"}
              link="/internships/iot"
            />
            <Frame
              imageUrl={web}
              label={"Web Development (MERN Stack)"}
              link="/internships/web-development"
            />
          </div>
        </div>

        {/* Workshops Section */}
        <div className="text-3xl">
          <h1>Workshops</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Frame
              imageUrl={uiux}
              label={"UI/UX Design Workshop"}
              link="/workshops/uiux"
            />
            <Frame
              imageUrl={nptel}
              label={"NPTEL Course on Software Testing"}
              link="/workshops/nptel"
            />
            <Frame
              imageUrl={java}
              label={"Workshop on Java Programming"}
              link="/workshops/java"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
