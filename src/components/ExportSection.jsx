import React from "react";
import { copyToClipboard } from "../utils/copyToClipboard";
import Swal from "sweetalert2";

const ExportSection = ({ direction, colors }) => {
  const tailwindDirection = {
    "to right": "r",
    "to left": "l",
    "to top": "t",
    "to bottom": "b",
    "to top right": "tr",
    "to top left": "tl",
    "to bottom right": "br",
    "to bottom left": "bl",
  };

  const gradientCSS = `background: linear-gradient(${direction}, ${colors[0]}, ${colors[1]});`;
  const tailwindCSS = `bg-gradient-to-${tailwindDirection[direction]} from-[${colors[0]}] to-[${colors[1]}]`;

  const handleCopyCSS = () => {
    copyToClipboard(gradientCSS);
    Swal.fire({
      html: `<span style="color: #ffffff;">CSS telah berhasil dicopy ke clipboard!</span>`,
      icon: "success",
      background: "#13124F",
      timer: 4000,
      showConfirmButton: false,
    });
  };

  const handleCopyTailwindCSS = () => {
    copyToClipboard(tailwindCSS);
    Swal.fire({
      html: `<span style="color: #ffffff;">Tailwind CSS telah berhasil dicopy ke clipboard!</span>`,
      icon: "success",
      background: "#13124F",
      timer: 4000,
      showConfirmButton: false,
    });
  };

  return (
    <div className="mt-6 px-4">
      <h3 className="text-sm font-medium text-gray-300 mb-2">CSS CODE:</h3>
      <div className="text-gray-300 p-3 border border-gray-500 rounded-md text-sm font-mono mb-3">
        {gradientCSS}
      </div>
      <button
        onClick={handleCopyCSS}
        className="w-full mb-3 p-2 border border-gray-500 text-white text-sm font-medium rounded-md transition-all hover:text-blue-600 hover:border-blue-600"
      >
        COPY
      </button>
      <h3 className="text-sm font-medium text-gray-300 mb-2">TAILWIND CSS CODE:</h3>
      <div className="text-gray-300 p-3 border border-gray-500 rounded-md text-sm font-mono mb-3">
        {tailwindCSS}
      </div>
      <button
        onClick={handleCopyTailwindCSS}
        className="w-full mb-3 p-2 border border-gray-500 text-sm text-white font-medium rounded-md transition-all hover:text-blue-600 hover:border-blue-600"
      >
        COPY
      </button>
    </div>
  );
};

export default ExportSection;