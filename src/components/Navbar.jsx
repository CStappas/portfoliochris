import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 45) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? 'container-bg' : 'container'}>
      <div className="container">
        <button className="button" >
          <span id="nav">Home</span>
        </button>
        <button className="button">
          <span id="nav">About</span>
        </button>
        <button className="button">
          <span id="nav">Work</span>
        </button>
        <button className="button">
          <span id="nav">Contact</span>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
