import React, { useEffect, useRef, useState } from 'react';

export default function SpotlightEffect() {
  const spotlightRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const render = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${currentX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${currentY}px`);
      }
      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [visible]);

  return (
    <div
      ref={spotlightRef}
      className="cursor-spotlight"
      style={{ opacity: visible ? 1 : 0 }}
      aria-hidden="true"
    />
  );
}
