import React, { useEffect } from "react";

export default function MouseTracker() {
  useEffect(() => {
    function handleMouseMove(e) {
      console.log("Mouse:", e.clientX, e.clientY);
    }
    window.addEventListener("mousemove", handleMouseMove);
    // cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h2>Mouse Tracker</h2>
      <p>Open console and move your mouse to see coordinates.</p>
    </div>
  );
}
