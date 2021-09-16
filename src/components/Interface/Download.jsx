import React from "react";

function Download({ exportToPng, frame }) {
  
  return (
    <button
      className="sm:ml-auto h-full bg-indigo-500 text-white rounded font-bold flex justify-center items-center px-2 ml-auto text-base"
      onClick={() => exportToPng(frame.current)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download
    </button>
  );
}

export default Download;
