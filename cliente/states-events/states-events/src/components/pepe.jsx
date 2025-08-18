import Oro from "./oro";

export default function Pepe({ depositado, accion }) {
  return (
    <>
      <div>Pepe es el intermediario entre la mina de oro y el depósito</div>
      <input type="number" />
      <Oro depositado={depositado} minar={accion} />
    </>
  );
}
