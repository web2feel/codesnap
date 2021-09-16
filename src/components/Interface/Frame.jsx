import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import ControlPanel from "./ControlPanel";
import EditorHeader from "./EditorHeader";
import Editor from "./Editor";
import { useSelector } from "react-redux";

function Frame() {
  const frame = useRef(null);
  const { spacing, dark, title } = useSelector((state) => state.panel);
  function exportToPng(dom) {
    htmlToImage
      .toPng(dom, { pixelRatio: 2 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = title;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <>
      <ControlPanel frame={frame} exportToPng={exportToPng} />
      <div
        ref={frame}
        className={` bg-gradient-to-br from-rose-700 to-indigo-700 rounded-lg p-${spacing} transform duration-150`}
      >
        <div
          className={`bg-opacity-90 rounded-lg shadow-lg ${
            dark ? "editor_dark bg-blueGray-900" : "editor_lite bg-white"
          }`}
        >
          <EditorHeader />
          <Editor />
        </div>
      </div>
    </>
  );
}

export default Frame;
