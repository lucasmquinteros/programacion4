import { useEffect, useState } from "react";

export default function Cursor() {
  const [border, setBorder] = useState("border-red-500");
  useEffect(() => {
    setTimeout(() => setBorder("border-[#0b7e82]"), 500);

    return () => setBorder("border-red-500");
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
<<<<<<< HEAD
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateMousePosition);

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
=======
    const handleMouseMove = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
>>>>>>> 2a4ebaad28eacb76716279f98af2814c9717861d
    };
  }, []);

  return (
    <div
<<<<<<< HEAD
      style={{ left: mousePosition.x, top: mousePosition.y }}
      className={`${border} z-[0]  bg-pink-900 absolute  w-20 h-20 rounded-full border transition pointer-events-none -translate-x-1/2 -translate-y-1/2`}
=======
      style={{ transform: `translate(${pos.x}px, ${pos.y}px` }}
      className={`${border} z-[0] -top-10 -left-10 bg-gray-900 absolute w-20 h-20 rounded-full border transition-[border] duration-200 pointer-events-none`}
>>>>>>> 2a4ebaad28eacb76716279f98af2814c9717861d
    ></div>
  );
}
