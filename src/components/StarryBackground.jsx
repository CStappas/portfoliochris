import React, { useEffect, useRef } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const stars = starsRef.current;
    const generateStars = () => {
      for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
      }
    };

    generateStars();

    return () => {
      while (stars.firstChild) {
        stars.removeChild(stars.firstChild);
      }
    };
  }, []);

  return <div ref={starsRef} className="starry-background"></div>;
};

export default StarryBackground;