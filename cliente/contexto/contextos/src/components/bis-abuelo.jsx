import { useContext, useState } from "react";
import Abuelo from "./abuelo";
import CountContext from "../context/count-context";

export default function BisAbuelo() {
  const { handleIncrementar } = useContext(CountContext);
  return (
    <div className="border-2 border-red-500">
      <h1>Soy el BisAbuelo</h1>
      <button onClick={handleIncrementar}>Aumentar</button>
      <Abuelo />
    </div>
  );
}
