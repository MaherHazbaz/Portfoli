import React from "react";

const CustomButton = ({ onClick, button }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-800 hover:text-white font-thin py-2 px-8 rounded-br-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
    >
      {button}
    </button>
  );
};

export default CustomButton;
