import React from "react";
import { getRandomColor } from "../utils/randomColor";

const RandomGradientButton = ({ setColors }) => {
  const handleClick = () => {
    setColors([getRandomColor(), getRandomColor()]);
  };

  return (
    <div className="px-4">
    <button
      onClick={handleClick}
      className="w-full p-2 border border-gray-500 text-white text-sm font-medium rounded-md transition-all hover:text-blue-600 hover:border-blue-600"
    >
    RANDOM PICKERS
    </button>
    </div>
  );
};

export default RandomGradientButton;
