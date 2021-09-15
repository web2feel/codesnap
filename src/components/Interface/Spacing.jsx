import React from "react";

function Spacing({ spacing, setSpacing }) {
  return (
    <div
      className=" mx-4 flex flex-col justify-center border rounded border-white border-opacity-20 px-3
    "
    >
      <span
        className="leading-tight mb-1 text-gray-400"
        style={{ fontSize: "10px" }}
      >
        Spacing
      </span>
      <input
        className="rounded-lg overflow-hidden appearance-none bg-blueGray-900 h-2 w-20 border border-blueGray-600 block"
        onChange={(e) => setSpacing(e.target.value)}
        type="range"
        min="4"
        max="40"
        step="4"
        value={spacing}
      />
    </div>
  );
}

export default Spacing;
