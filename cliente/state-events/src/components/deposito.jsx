import { useState } from "react";
import Intermediario from "./intermediario";

export default function Deposito() {
  const [oro, setOro] = useState(0);

  const depositarOro = (cantidad) => {
    setOro(oro + cantidad);
  };
  return (
    <>
      <div>Total de oro depositado: {oro}</div>
      <Intermediario depositado={oro} accion={() => depositarOro(3)} />
    </>
  );
}
