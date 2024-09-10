import React, { useState, useEffect } from "react";

const TypewriterEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = 80;

    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingInterval);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, text]);

  return <div className="typeffect">{displayedText}</div>;
};

export default TypewriterEffect;
