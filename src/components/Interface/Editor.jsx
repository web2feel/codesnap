import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { useSelector } from "react-redux";
function Editor() {
  const { mode } = useSelector((state) => state.panel);
  let sample = `function myFunction(p1, p2) {
      return p1 * p2;   // The function returns the product of p1 and p2
}`;
  return (
    <div className="px-4 pb-4">
      <CodeMirror
        value={sample}
        options={{
          scrollbarStyle: null,
          lineNumbers: false,
          lineWrapping: true,
          mode: mode,
        }}
      />
    </div>
  );
}

export default Editor;
