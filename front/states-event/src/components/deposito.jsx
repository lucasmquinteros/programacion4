import React, { useState } from "react";
import Pepe from "./pepe";

export default function Deposito() {
  const [oro, setOro] = useState(0);

  const depositar = (cant) => setOro(oro + cant);

  return (
    <>
      <h1>Total de oro en el deposito: {oro} uds</h1>
      <Pepe depositado={oro} accion={depositar} />
    </>
  );
}
