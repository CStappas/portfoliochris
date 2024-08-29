import React from "react";
import TypewriterEffect from "./type-effet.jsx";
import "./stars.css";

const Stars = () => {
  const introtext = "Hi I'm Christos, a front-end developer.";
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="title">
        <TypewriterEffect text={introtext} />
      </div>
    </>
  );
};
export default Stars;
