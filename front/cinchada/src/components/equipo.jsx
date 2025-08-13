import React from "react";

export default function Equipo({ color, cuerda, onTirar }) {
  return (
    <>
      <div>
        <h2>
          Equipo color: <span>{color}</span>
        </h2>
        <p>Tirando: {cuerda > 10 ? 10 : cuerda < 0 ? 0 : cuerda}m</p>
        <button onClick={() => onTirar(color)}>Tirar</button>
      </div>
    </>
  );
}
