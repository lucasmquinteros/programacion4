const TOTAL_ORO = 130;
export default function Oro({ depositado, minar }) {
  return (
    <>
      <div>Mina de oro: {TOTAL_ORO - depositado} unidades</div>
      <button onClick={() => minar(7)}>Minar oro</button>
    </>
  );
}
