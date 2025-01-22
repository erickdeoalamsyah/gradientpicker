import React, { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [direction, setDirection] = useState("to right");
  const [colors, setColors] = useState(["#3498db", "#9b59b6"]);

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-2">
      <Home direction={direction} setDirection={setDirection} colors={colors} setColors={setColors} />
    </div>
  );
};

export default App;
