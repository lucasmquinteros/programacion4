import { useEffect, useState } from "react";

export default function Cursor() {
  const [border, setBorder] = useState("border-green-600");
  useEffect(() => {
    setTimeout(() => setBorder("border-red-500"), 200);
    return () => {
      setBorder("border-blue-500");
    };
  }, []);

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleListener = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleListener);

    return document.removeEventListener("mousemove", handleListener);
  }, []);

  return (
    <div
      style={{ transform: `translate(${pos.x})px, ${pos.y}px` }}
      className={`${border} z-[-1] -top-10 -left-10 bg-blue-700 absolute w-20 h-20 border-2 rounded-full transition duration-200`}
    ></div>
  );
}
