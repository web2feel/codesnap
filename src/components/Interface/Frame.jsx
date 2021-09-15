import React, { useRef, useState } from "react";
import * as htmlToImage from "html-to-image";
import ControlPanel from "./ControlPanel";
import EditorHeader from "./EditorHeader";
import Editor from "./Editor";

function Frame() {
  const frame = useRef(null);
  //const [code, setCode] = useState(sample);
  //const [scale, setScale] = useState(1);
  const [mode, setMode] = useState("js");
  const [spacing, setSpacing] = useState("16");
  const [dark, setDark] = useState(true);
  const [title, setTitle] = useState("untitled");

  console.log(mode);

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
      <ControlPanel
        mode={mode}
        setMode={setMode}
        frame={frame}
        exportToPng={exportToPng}
        setSpacing={setSpacing}
        spacing={spacing}
        dark={dark}
        setDark={setDark}
      />

      <div
        ref={frame}
        className={` bg-gradient-to-br from-rose-700 to-indigo-700 rounded-lg p-${spacing} transform duration-150`}
      >
        <div
          className={`bg-opacity-90 rounded-lg shadow-lg ${
            dark ? "editor_dark bg-blueGray-900" : "editor_lite bg-white"
          }`}
        >
          <EditorHeader title={title} setTitle={setTitle} />
          <Editor mode={mode} />
        </div>
      </div>
    </>
  );
}

export default Frame;
