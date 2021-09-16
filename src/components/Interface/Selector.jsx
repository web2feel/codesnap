import React, { useState } from "react";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { set_mode } from "../../store/Panel/PanelSlice";
let modes = [
  "Bash",
  "C++",
  "C#",
  "Clojure",
  "CoffeeScript",
  "Crystal",
  "CSS",
  "D",
  "Dart",
  "Diff",
  "Docker",
  "Elm",
  "Erlang",
  "Fortran",
  "F#",
  "Gherkin",
  "Go",
  "Groovy",
  "Haskell",
  "HTML",
  "Java",
  "JavaScript",
  "JSON",
  "JSX",
  "Julia",
  "Kotlin",
  "LaTeX",
  "Lisp",
  "Lua",
  "Markdown",
  "Mathematica",
  "NGINX",
  "Objective C",
  "OCaml",
  "Perl",
  "PHP",
  "PowerShell",
  "Python",
  "R",
  "Scala",
  "SCSS",
  "Smalltalk",
  "SQL",
  "Swift",
  "TypeScript",
  "TSX",
  "Twig",
  "Verilog",
  "VHDL",
  "XQuery",
  "YAML",
];

function Selector() {
  const dispatch = useDispatch();
  const colourStyles = {
    control: (styles, state) => ({
      ...styles,
      backgroundColor: "transparent",
      height:"40px",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0.2)",
      },
    }),
    singleValue: styles => ({...styles, color:"#aaa"}),
    indicatorSeparator : styles => ({...styles, background:"rgba(255,255,255,0.2)"}),
    indicatorsContainer: styles => ({...styles, color: 'rgba(255,255,255,0.2)'}),
    input: styles => ({...styles, color:"#aaa"}),
  };
  const modeList = modes.map((x) => ({
    value: x.toLowerCase(),
    label: x,
  }));

  const [selected, setSelected] = useState(modeList[0]);

  const handleChange = (option) => {
    setSelected(option);
    //setMode(option.value);
    dispatch(set_mode({mode:option.value}))
  };

  return (
    <div className="w-full sm:w-40">
      <Select
        value={selected}
        onChange={(option) => handleChange(option)}
        options={modeList}
        styles={colourStyles}
      />
    </div>
  );
}

export default Selector;
