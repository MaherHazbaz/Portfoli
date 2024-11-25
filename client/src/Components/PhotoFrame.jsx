import React from "react";

const RectangularPhotoFrame = ({ src, alt, title }) => {
  return (
    <div className="relative flex justify-center items-center p-4 mx-auto">
      {/* Frame Container */}
      <div className="relative group w-[300px] sm:w-[400px] md:w-[500px]">
        {/* Image with Hover Effect */}
        <div className="transition-transform duration-500 group-hover:scale-105 group-hover:z-10">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover rounded-md shadow-none"
          />
        </div>

        {/* Title Overlay */}
        {title && (
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-70 text-black px-4 py-2 rounded-none text-lg font-semibold shadow-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            {title}
          </div>
        )}
      </div>
    </div>
  );
};

export default RectangularPhotoFrame