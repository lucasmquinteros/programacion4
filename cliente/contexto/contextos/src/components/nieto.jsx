import { useContext } from "react";
import CountContext from "../context/count-context";

export default function Nieto() {
  const { count } = useContext(CountContext);
  return (
    <div className="border-2 border-green-500">
      <h5>Soy el nieto</h5>
      <p>yo recibo el contador y es: {count}</p>
    </div>
  );
}
