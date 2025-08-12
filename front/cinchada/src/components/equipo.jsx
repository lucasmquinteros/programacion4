import React from "react";

export default function Equipo({ color, cuerda, onTirar }) {
  return (
    <>
      <h2>
        Metros de equipo {color}: {cuerda}
      </h2>
      <button onClick={() => onTirar(color)}>Tirar</button>
    </>
  );
}
