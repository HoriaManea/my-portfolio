import React, { useRef, useEffect } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const scale = useRef(1);

  useEffect(() => {
    // Ascunde cursorul nativ
    document.body.style.cursor = "none";

    const handleMouseMove = (e) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;
    };

    const animate = () => {
      pos.current.x += (targetPos.current.x - pos.current.x) * 0.2;
      pos.current.y += (targetPos.current.y - pos.current.y) * 0.2;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) scale(${scale.current})`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      // Resetează cursorul dacă componenta se demontează
      document.body.style.cursor = "default";
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "40px",
        height: "40px",
        transformOrigin: "0 0",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        style={{ pointerEvents: "none" }}
      >
        {/* Contur negru */}
        <path d="M0 0 L0 30 L7 23 L14 38 L18 36 L11 21 L20 21 Z" fill="black" />
        {/* Umplere colorată */}
        <path
          d="M1.5 1.5 L1.5 27 L7.5 21 L14 36 L16 35 L9.5 20 L19 20 Z"
          fill="url(#cursorGradient)"
        />
        <defs>
          <linearGradient id="cursorGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff00cc" />
            <stop offset="100%" stopColor="#3333ff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
