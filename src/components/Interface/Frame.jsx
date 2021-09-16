import React, { useRef } from "react";
import * as htmlToImage from "html-to-image";
import ControlPanel from "./ControlPanel";
import EditorHeader from "./EditorHeader";
import Editor from "./Editor";
import { useSelector, useDispatch } from "react-redux";
import { set_copyAlert } from "../../store/Panel/PanelSlice";
function Frame() {
  const { ClipboardItem } = window;
  const frame = useRef(null);
  const { spacing, dark, title } = useSelector((state) => state.panel);
  const dispatch = useDispatch();
  const runFb = () => {
    dispatch(set_copyAlert());
    setTimeout(() => {
      dispatch(set_copyAlert());
    }, 1000);
  };

  const exportToPng = (dom) => {
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

  const copyPic = (dom) => {
    htmlToImage
      .toBlob(dom, { pixelRatio: 2 })
      .then(async function (blob) {
        const item = new ClipboardItem({ "image/png": blob });
        await navigator.clipboard.write([item]);
        runFb()
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  return (
    <>
      <ControlPanel frame={frame} exportToPng={exportToPng} copyPic={copyPic} />
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
