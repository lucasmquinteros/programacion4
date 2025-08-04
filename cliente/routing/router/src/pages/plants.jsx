import React from "react";

export default function Plants() {
  return (
    <main>
      <h1>Listado de las plantas</h1>

      <ul>
        {plants.map((pl) => (
          <Link href={`/plants/${pl.id}}`}>{pl.name} - </Link>
        ))}
      </ul>
    </main>
  );
}
