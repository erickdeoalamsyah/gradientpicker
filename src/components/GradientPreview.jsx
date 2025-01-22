import React from "react";

const GradientPreview = ({ direction, colors }) => {
  return (
    <div className="border border-gray-500 p-4 rounded-lg md:h-full">
      <div
      className="col-span-1 md:col-span-2 bg-white rounded-lg shadow-xl h-64 md:h-full flex items-center justify-center p-4 transition-transform duration-300 transform "
      style={{ background: `linear-gradient(${direction}, ${colors[0]}, ${colors[1]})` }}
    >
      <h2 className="text-white text-lg drop-shadow-lg">Preview</h2>
    </div>
    </div>
  );
};

export default GradientPreview;
