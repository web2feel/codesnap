import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_dark } from "../../store/Panel/PanelSlice";

function Switcher() {
  const { dark } = useSelector((state) => state.panel);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(set_dark())}
      className={`border rounded border-white border-opacity-20 relative w-12 cursor-pointer overflow-hidden transform-gpu duration-300 ${
        dark ? "bg-blueGray-900" : "bg-blueGray-800 "
      } `}
    >
      <div
        className={`inline-flex items-center h-full transform-gpu duration-200 ${
          dark ? "-ml-12" : "ml-0"
        }`}
      >
        <div className="text-yellow-500 w-8 mx-2 flex items-center justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="text-gray-200 w-8 mx-2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
