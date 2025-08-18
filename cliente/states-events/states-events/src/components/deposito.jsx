import { useState } from "react";
import Pepe from "./pepe";

export default function Deposito() {
  const [unidades, setUnidades] = useState(0);

  const depositar = () => {
    setUnidades(unidades + 1);
  };
  return (
    <>
      <div>Total de oro depositado: {unidades} unidades</div>
      <Pepe depositado={unidades} accion={depositar} />
    </>
  );
}
