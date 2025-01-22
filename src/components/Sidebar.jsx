import React from "react";
import ColorPicker from "./ColorPicker";
import RandomGradientButton from "./RandomGradientButton";
import ExportSection from "./ExportSection";
import DirectionSelector from "./DirectionSelector";

const Sidebar = ({ direction, setDirection, colors, setColors }) => {
  return (
    <div className=" rounded-lg shadow-lg border border-gray-500 py-4">
      <ColorPicker label="FIRST COLOR" color={colors[0]} setColor={(color) => setColors([color, colors[1]])} />
      <ColorPicker label="SECOND COLOR" color={colors[1]} setColor={(color) => setColors([colors[0], color])} />
      <DirectionSelector direction={direction} setDirection={setDirection} />
      <RandomGradientButton setColors={setColors} />
      <ExportSection direction={direction} colors={colors} />
    </div>
  );
};

export default Sidebar;
