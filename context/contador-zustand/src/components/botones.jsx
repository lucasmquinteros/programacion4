import { useStore } from "../store/useContadorStore";

export default function Botones() {
  const incrementarContador = useStore((state) => state.incrementarContador);
  const decrementarContador = useStore((state) => state.decrementarContador);
  const resetContador = useStore((state) => state.resetContador);
  return (
    <div>
      <button onClick={incrementarContador}>+ 1</button>
      <button onClick={decrementarContador}>-1</button>
      <button onClick={resetContador}>Reset</button>
    </div>
  );
}
