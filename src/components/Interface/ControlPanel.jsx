import React from "react";
import CopyPic from "./CopyPic";
import Download from "./Download";
import Selector from "./Selector";
import Spacing from "./Spacing";
import Switcher from "./Switcher";
function ControlPanel({ frame, exportToPng, copyPic }) {
  return (
    <div className="w-full p-2 mb-4 rounded-lg bg-blueGray-800 border border-blueGray-700 border-opacity-60 text-sm bg-opacity-40">
      <div className="flex flex-col sm:flex-row justify-start gap-y-2">
        <div>
          <Selector />
        </div>
        <div className="sm:flex-1 flex gap-x-2 sm:ml-2 h-10">
          <Spacing />
          <Switcher />
          <CopyPic copyPic={copyPic} frame={frame} />
          <Download exportToPng={exportToPng} frame={frame} />
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
