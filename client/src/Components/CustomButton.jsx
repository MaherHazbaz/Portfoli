import React from "react";

const CustomButton = ({ onClick, button, Link, to }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-14 border-b-4 border-white hover:border-black  "
    >
      {button}
    </button>
  );
};

export default CustomButton;
