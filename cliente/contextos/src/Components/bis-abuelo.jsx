import { useState } from "react";
import Abuelo from "./abuelo";

export default function BisAbuelo() {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-red-500">
      <h1>Soy el BisAbuelo</h1>
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
      <Abuelo count={count} />
    </div>
  );
}
