import { useContext } from "react";
import CountContext from "../context/count-context";
import Hijo from "./hijo";

export default function Padre() {
  const { handleIncrementar } = useContext(CountContext);
  return (
    <div className="border-2 border-violet-500">
      <h3>Soy el Padre</h3>
      <button onClick={handleIncrementar}>
        Aumentar el contador desde el padre
      </button>
      <Hijo />
    </div>
  );
}
