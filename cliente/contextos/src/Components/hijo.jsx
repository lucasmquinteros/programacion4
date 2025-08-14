import Nieto from "./nieto";

export default function Hijo({ count }) {
  return (
    <div className="border-2 border-amber-600">
      <h4>Soy el hijo</h4>
      <Nieto count={count} />
    </div>
  );
}
