const TOTAL_ORO = 50;
export default function Oro({ depositado, minar }) {
  return (
    <>
      <div>Mena de oro: {TOTAL_ORO - depositado} Unidades</div>
      <div>
        <button onClick={minar}>Minar 1 de oro</button>
      </div>
    </>
  );
}
