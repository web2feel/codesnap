import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_title } from "../../store/Panel/PanelSlice";
function EditorHeader() {
  const { title } = useSelector((state) => state.panel);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center relative">
      <div className="p-4 absolute left-0">
        <svg className="h-3" viewBox="0 0 252 64">
          <g fill="none" fillRule="evenodd">
            <g fill="#666">
              <circle id="Oval" cx="32" cy="32" r="32" fill="#F93D3D"></circle>
              <circle
                id="Oval-Copy"
                cx="126"
                cy="32"
                r="32"
                fill="#FAC418"
              ></circle>
              <circle
                id="Oval-Copy-2"
                cx="220"
                cy="32"
                r="32"
                fill="#29D083"
              ></circle>
            </g>
          </g>
        </svg>
      </div>
      <div className="py-2 title-box">
        <input
          onChange={(e) => dispatch(set_title({ title: e.target.value }))}
          value={title}
          className="text-center text-gray-500 w-48 py-2 px-2 text-sm appearance-none bg-transparent border-none focus:border-transparent border-transparent focus:outline-none"
        />
      </div>
      <div></div>
    </div>
  );
}

export default EditorHeader;
