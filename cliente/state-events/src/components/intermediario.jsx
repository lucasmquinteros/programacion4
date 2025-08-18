import Oro from "./oro";

export default function Intermediario({ depositado, accion }) {
  return (
    <>
      <div>intermediario de la mena de oro y el deposito.</div>
      <Oro depositado={depositado} minar={accion} />
    </>
  );
}
