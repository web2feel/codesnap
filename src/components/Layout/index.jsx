import React from "react";

function Layout({ children }) {
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <div className=" flex flex-col min-h-screen">{children}</div>
    </div>
  );
}

export default Layout;
