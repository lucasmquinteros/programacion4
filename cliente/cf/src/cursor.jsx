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
    const handleMouseMove = (event) => {
      setPos({
        x: event.clientX,
        y: event.clientY,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`${border} z-[0] top-0 left-0 bg-gray-900 absolute m-5 w-20 h-20 rounded-full border transition`}
    ></div>
  );
}
