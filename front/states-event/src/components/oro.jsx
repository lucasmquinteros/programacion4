import React from "react";

const TOTAL_ORO = 20;

export default function Oro({ depositado, minar }) {
  return (
    <>
      <h1>Mena de oro: {TOTAL_ORO - depositado} uds</h1>
      <button onClick={() => minar(3)}>Minar 3 de oro</button>
    </>
  );
}
