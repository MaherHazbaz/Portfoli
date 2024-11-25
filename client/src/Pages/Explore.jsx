import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import bird from "../Animations/bird.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import PhotoFrame from "../Components/PhotoFrame";
import profile from "../Images/profile.jpg";
import CustomButton from "../Components/CustomButton";
import Navbar from "../Layouts/Navbar";
import insta from "../Animations/insta.json";
import ima from "../Images/11.jpg"
import pro from "../Images/pro.png"
import linkedin from "../Animations/linkedin.json"
import instagram from "../Animations/instagram.json"
import gmail from "../Animations/gmail.json"
import github from "../Animations/github.json"

const Explore = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left-side Navbar */}
        <div className=" flex flex-col items-center">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 py-9 overflow-auto">
          {/* Main Content Grid */}
          <div className="flex flex-auto gap-10">
            {/* Profile Image */}
            <div className=" justify-center items-start">
              <PhotoFrame src={pro} />
            </div>
            {/* Text Content */}
            <div className="text-lg md:text-2xl lg:text-3xl font-thin">
              <h1 className="text-5xl font-light ">Maher Hazbaz</h1>
              <h2 className="text-2xl mt-2 ">Web Developer</h2>
              <p className="mt-8">
                Dynamic and ambitious Software Engineer with a passion for
                problem-solving and innovation. Proficient in multiple
                programming languages like JavaScript, HTML, CSS, React.js,
                Node.js. A strong collaborator with excellent communication
                skills, and ready to contribute to a dynamic team environment.
                Seeking opportunities to gain hands-on experience and make a
                meaningful impact in the tech industry.
              </p>
              <div className="grid grid-flow-col mt-8">
                <div className="flex flex-col items-center">
                  <a
                    href="https://www.instagram.com/maherhazbaz?igsh=bHpha2VwZ2l6NGUz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie
                      animationData={instagram}
                      className="h-24 w-24"
                      loop
                    />
                  </a>
                  <span className="text-sm font-medium mt-2">Instagram</span>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="https://www.linkedin.com/in/maher-hazbaz-4949832ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfuYvJiJOQ%2BWrv5hBTPDSMA%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie
                      animationData={linkedin}
                      className="h-24 w-24"
                      loop
                    />
                  </a>
                  <span className="text-sm font-medium mt-2">LinkedIn</span>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="mailto:maherhazbaz7@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie animationData={gmail} className="h-24 w-24" loop />
                  </a>
                  <span className="text-sm font-medium mt-2">Gmail</span>
                </div>

                <div className="flex flex-col items-center">
                  <a
                    href="https://github.com/MaherHazbaz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Lottie
                      animationData={github}
                      className="h-16 w-24 mt-4"
                      loop
                    />
                  </a>
                  <span className="text-sm font-medium mt-6">GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
