import { useEffect, useState } from "react";

export default function Cursor() {
  const [border, setBorder] = useState("border-red-500");
  useEffect(() => {
    setTimeout(() => setBorder("border-[#0b7e82]"), 500);

    return () => setBorder("border-red-500");
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      style={{ left: mousePosition.x, top: mousePosition.y }}
      className={`${border} z-[0]  bg-pink-900 absolute  w-20 h-20 rounded-full border transition pointer-events-none -translate-x-1/2 -translate-y-1/2`}
    ></div>
  );
}
