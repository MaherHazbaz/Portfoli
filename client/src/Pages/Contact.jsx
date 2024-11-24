import React from "react";
import Navbar from "../Layouts/Navbar";
import bg from "../Images/bg.jpg"; // Import the background image

const Contact = () => {
  return (
    <div className="flex h-screen">
      {/* Left-side Navbar */}
      <div className="">
        <div className="">
          <Navbar />
        </div>
      </div>

      {/* Right-side Content with Full Background Image and Gradient Overlay */}
      <div
        className="flex-1 h-full"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url(${bg})`,
          backgroundPosition: "",
          backgroundSize: "contain", // Ensure the full image is visible
          backgroundRepeat: "no-repeat", // Prevent tiling of the image
        }}
      >
        <div className="p-10 h-full">
          <h1 className="text-3xl font-thin">Contact Me</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
