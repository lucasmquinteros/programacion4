import React from "react";
import Oro from "./oro";

export default function Pepe({ depositado, accion }) {
  return (
    <>
      <h1>Soy Pepe</h1>
      <Oro depositado={depositado} minar={accion} />
    </>
  );
}
