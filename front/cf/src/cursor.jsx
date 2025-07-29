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
    // api window.client coordenadas del cursor, acomodar el icono segun la posicion
  }, []);

  return (
    <div
      className={`${border} z-[-1] top-0 left-0 bg-blue-700 absolute w-20 h-20 border-2 rounded-full transition duration-200`}
    ></div>
  );
}
