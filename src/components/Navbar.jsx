import React from "react";
import "./navbar.css";

const Navbar = () => {

  window.onload = function () {
    window.scrollTo(0, 0);
};

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="container">
      <button className="button" onClick={() => scrollToSection("top")}>
        <span id="nav">Home</span>
      </button>
      <button className="button" onClick={() => scrollToSection("about")}>
        <span id="nav">About</span>
      </button>
      <button className="button" onClick={() => scrollToSection("projects")}>
        <span id="nav">Projects</span>
      </button>
      <button className="button" onClick={() => scrollToSection("contact")}>
        <span id="nav">Contact</span>
      </button>
    </div>
  );
};

export default Navbar;
