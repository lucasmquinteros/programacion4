import { useEffect, useState } from "react";

export default function Cursor() {
  const [border, setBorder] = useState("border-red-500");
  useEffect(() => {
    setTimeout(() => setBorder("border-[#0b7e82]"), 500);

    return () => setBorder("border-red-500");
  }, []);

  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{ transform: `translate(${pos.x}px, ${pos.y}px` }}
      className={`${border} z-[0] -top-10 -left-10 bg-gray-900 absolute w-20 h-20 rounded-full border transition-[border] duration-200 pointer-events-none`}
    ></div>
  );
}
