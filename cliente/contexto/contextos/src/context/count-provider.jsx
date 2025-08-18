import { useState } from "react";
import CountContext from "./count-context";

export default function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  const handleIncrementar = () => {
    setCount((prev) => prev + 1); //(count + 1)
  };

  return (
    <CountContext.Provider value={{ count, handleIncrementar }}>
      {children}
    </CountContext.Provider>
  );
}
