import React from "react";

const HexagonPhotoFrame = ({ src, alt, title }) => {
  return (
    <div className="relative flex justify-center items-center p-6 max-w-sm mx-auto">
      <div className="relative w-[500px] h-[700px] group  inset-0  ">
        {/* Background with glowing border and pulsing effect */}
        <div className="absolute inset-0 bg-black clip-hexagon group-hover:rotate-45 transition-transform duration-700 ease-in-out">
          <div className="absolute inset-0 border-4 border-black rounded-full animate-pulse"></div>
        </div>
        <div className="absolute inset-0 border-4 border-white group-hover:border-gray-400  object-cover w-full h-full clip-hexagon transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg "></div>

        {/* Image with zoom effect and subtle shadow */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 object-cover w-full h-full clip-hexagon transition-transform duration-700 ease-in-out transform group-hover:scale-105 group-hover:shadow-lg "
        />

        {/* Title with fade-in and slide-up effect */}
        {title && (
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out transform group-hover:translate-y- group-hover:translate-y-2">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default HexagonPhotoFrame;
