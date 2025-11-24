import React, { useEffect } from "react";

export default function GlitterEffect() {
  useEffect(() => {
    const createSparkle = (x, y) => {
      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparklesContainer.appendChild(sparkle);

      sparkle.style.left = x + "px";
      sparkle.style.top = y + "px";

      // Remove after animation
      setTimeout(() => sparkle.remove(), 700);
    };

    const sparklesContainer = document.getElementById("sparkles-container");

    const handleMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      createSparkle(x, y);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return <div id="sparkles-container" className="pointer-events-none"></div>;
}
