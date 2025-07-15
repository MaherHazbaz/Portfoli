import React from "react";
import Navbar from "../Layouts/Navbar";

const Resume = () => {
  return (
    <>
      <div className="grid grid-flow-col md:flex-row h-screen">
        {/* Left-side Navbar */}
        <div className="  bg-transparent">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-start justify-center  md:p-5">
          <h1 className="text-2xl md:text-4xl font-thin mb-6 text-center ite">
            Download or View My Resume
          </h1>
          <div className="space-y-4 md:space-x-4 md:space-y-0 flex flex-col md:flex-row px-16">
            {/* Download Button */}
            <a
              href="/Documents/RESUME MAHER.pdf"
              download="MAHER RESUME.pdf"
              className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition text-center"
            >
              Download Resume
            </a>

            {/* View Button */}
            <a
              href="/Documents/RESUME MAHER.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition text-center"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
