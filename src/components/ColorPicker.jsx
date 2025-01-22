import React from "react";

const ColorPicker = ({ label, color, setColor }) => {
  return (
    <div className="mb-2 px-4">
      <label className="block text-sm font-medium text-gray-300">{label}</label>
      <div className="relative w-full h-12 ">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="absolute inset-0 w-full h-full cursor-pointer bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
