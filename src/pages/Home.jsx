import React from "react";
import GradientPreview from "../components/GradientPreview";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Home = ({ direction, setDirection, colors, setColors }) => {
  return (
    <div className="w-full p-2">
      <Header />
      <div className="flex flex-col-reverse md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Sidebar direction={direction} setDirection={setDirection} colors={colors} setColors={setColors} />
        </div>
        <div className="w-full md:w-2/3">
          <GradientPreview direction={direction} colors={colors} />
        </div>
      </div>
    </div>
  );
};

export default Home;
