import React from "react";
import logo from "./logo.svg";
function Header() {
  return (
    <div className="text-center text-white">
      <div className="my-12">
        <img className="w-48 mx-auto" src={logo} alt="Logo" />
        <h3 className="my-1 text-gray-400">
          Create stylish images of your code.
        </h3>
      </div>
    </div>
  );
}

export default Header;
