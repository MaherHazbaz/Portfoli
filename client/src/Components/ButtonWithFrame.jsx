import React, { useState } from "react";
import Frame from "./Frame"; // Adjust the import path as needed

const ButtonWithFrame = ({ buttonText }) => {
  const [showFrame, setShowFrame] = useState(false);

  const handleClick = () => {
    setShowFrame(!showFrame);
  };

  return (
    <div className="relative inline-flex items-center">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-black text-white font-thin rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50"
      >
        {buttonText}
      </button>

      <Frame showFrame={showFrame}>
        <p className="text-center text-black font-medium">
          <p>Follow Me On Instgram</p>
        </p>
      </Frame>
    </div>
  );
};

export default ButtonWithFrame;
