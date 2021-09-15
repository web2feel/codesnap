import React from "react";
import Download from "./Download";
import Selector from "./Selector";
import Spacing from "./Spacing";
import Switcher from "./Switcher";
function ControlPanel({ frame, exportToPng, mode, setMode, setSpacing, spacing, dark, setDark }) {
  return (
    <div className="w-full min-w-min p-2 mb-4 rounded-lg bg-blueGray-800 border border-blueGray-700 border-opacity-60 text-sm">
      <div className="flex">
        <Selector mode={mode} setMode={setMode} />
        <Spacing setSpacing={setSpacing} spacing={spacing} />
        <Switcher dark={dark} setDark={setDark}/>
        <Download exportToPng={exportToPng} frame={frame} />
      </div>
    </div>
  );
}

export default ControlPanel;
