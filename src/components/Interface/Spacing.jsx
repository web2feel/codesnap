import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set_spacing } from "../../store/Panel/PanelSlice";
function Spacing() {
  const { spacing } = useSelector((state) => state.panel);
  const dispatch = useDispatch();
  return (
    <div
      className="flex flex-col justify-center border rounded border-white border-opacity-20 px-3
    "
    >
      <input
        className="rounded overflow-hidden appearance-none bg-blueGray-900 h-4 w-20 border border-blueGray-600 block"
        onChange={(e) => dispatch(set_spacing({ space: e.target.value }))}
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
