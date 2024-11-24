import React from "react";

const CustomButton = ({ onClick, button }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-800 border border-black text-white hover:bg-transparent hover:text-black font-thin py-2 px-8 rounded-br-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
    >
      {button}
    </button>
  );
};

export default CustomButton;
