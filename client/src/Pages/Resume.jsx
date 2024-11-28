import React from "react";
import Navbar from "../Layouts/Navbar";

const Resume = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className="flex flex-col items-center">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
          <h1 className="text-4xl font-thin mb-6">
            Download or View My Resume
          </h1>
          <div className="space-x-4">
            {/* Download Button */}
            <a
              href="/Documents/Resume.pdf"
              download="MaherResume.pdf"
              className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
            >
              Download Resume
            </a>

            {/* View Button */}
            <a
              href="/Documents/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition"
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
