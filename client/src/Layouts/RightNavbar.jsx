import React, { useState } from "react";
import linkedin from "../Animations/linkedin.json";
import instagram from "../Animations/instagram.json";
import gmail from "../Animations/gmail.json";
import github from "../Animations/github.json";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const RightNavbar = () => {
    // State to control visibility
    const [isVisible, setIsVisible] = useState(false); // Start with `false` to keep it hidden initially

    // Toggle visibility function
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            {/* Navbar */}
            <div
                className={`fixed bottom-5 right-0 bg-gray-800 border-white border text-white rounded-l-full shadow-lg p-3 transition-transform duration-500 ${isVisible ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-7">
                    {/* Social Links */}
                    {[
                        { icon: linkedin, url: "https://www.linkedin.com/in/maher-hazbaz-4949832ba/" },
                        { icon: instagram, url: "https://www.instagram.com/maherhazbaz/" },
                        { icon: gmail, url: "mailto:maherhazbaz7@gmail.com" },
                        { icon: github, url: "https://github.com/MaherHazbaz" },
                        { icon: github, url: "https://github.com/MaherHazbaz" },
                    ].map((item, index) => (
                        <div key={index} className="relative group flex flex-col items-center">
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative"
                            >
                                <Lottie
                                    animationData={item.icon}
                                    className="h-8 w-8 sm:h-12 sm:w-12 transform transition-transform duration-300 group-hover:scale-110"
                                    loop
                                />
                            </a>
                            <span className="mt-2 text-xs sm:text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {["LinkedIn", "Instagram", "Gmail", "GitHub","Instagram"][index]}
                            </span>
                        </div>
                    ))}
                </div>
            </div>


            {/* Toggle Button */}
            <button
                onClick={toggleVisibility}
                className="fixed bottom-11 right-5 z-10 bg-gray-800 border-2 border-white text-white rounded-full p-4 shadow-lg focus:outline-none hover:bg-gray-700 hover:border-1 hover:border-white transition"
            >
                <IoArrowBackCircleOutline
                    className={`text-3xl transform transition-transform duration-300 ${isVisible ? "-rotate-180" : "rotate-0"
                        }`}
                />
            </button>
        </>
    );
};

export default RightNavbar;
