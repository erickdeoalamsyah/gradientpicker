import React from "react";

const DirectionSelector = ({ direction, setDirection }) => {
  return (
    <div className="mb-4 px-4">
      <label className="block text-sm font-medium text-gray-300 mb-2">DIRECTION</label>
      <select
        value={direction}
        onChange={(e) => setDirection(e.target.value)}
        className="w-full p-2 border border-gray-500 rounded-lg bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-600"
      >
        <option className="bg-gray-900 text-white text-xs" value="to right">Left to Right</option>
        <option className="bg-gray-900 text-white text-xs" value="to bottom">Top to Bottom</option>
        <option className="bg-gray-900 text-white text-xs" value="to top right">Top Left to Bottom Right</option>
        <option className="bg-gray-900 text-white text-xs" value="to bottom left">Top Right to Bottom Left</option>
      </select>
    </div>
  );
};

export default DirectionSelector;
