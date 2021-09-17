import React from "react";
import { useSelector } from "react-redux";
function CopyPic({ frame, copyPic }) {
  const { copyAlert } = useSelector((state) => state.panel);

  return (
    <div
      className="relative ml-auto w-12 h-full bg-blue-600  hover:bg-blue-500 transform duration-300 text-white rounded flex items-center justify-center cursor-pointer"
      onClick={() => copyPic(frame.current)}
    >
      <span
        className={`bg-green-500 rounded absolute -top-8 px-2 py-1 opacity-0 pointer-events-none transform-gpu duration-300 translate-y-1 ${
          copyAlert ? "opacity-100 -translate-y-1" : ""
        }`}
      >
        Copied
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
}

export default CopyPic;
