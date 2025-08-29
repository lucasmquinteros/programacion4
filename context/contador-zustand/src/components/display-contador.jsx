import { useStore } from "../store/useContadorStore";

export default function ContadorDisplay() {
  const contadorDisplay = useStore((state) => state.contador);
  return <h2>Total contador: {contadorDisplay}</h2>;
}
