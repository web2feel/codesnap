import React from "react";
function Footer() {
  return (
    <div className="py-12 text-center text-blueGray-500 text-sm">
      <p>
        Developed by Jinson Abraham | Find me on{" "}
        <a className="hover:text-gray-200" rel="noreferrer" target="_blank" href="https://github.com/web2feel">
          Github
        </a>{" "}
      </p>
      <p>
        Built with{" "}
        <a className="hover:text-gray-200"  rel="noreferrer" target="_blank" href="https://reactjs.org/">
          ReactJS
        </a>{" "}
        and{" "}
        <a className="hover:text-gray-200"  rel="noreferrer" target="_blank" href="https://tailwindcss.com/">
          TailwindCSS
        </a>
      </p>
    </div>
  );
}

export default Footer;
