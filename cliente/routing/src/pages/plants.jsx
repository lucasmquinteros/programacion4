import { Link } from "wouter";
import { plants } from "../data";

export default function Plants() {
  return (
    <main>
      <h1>Este es el listado de las plantas: </h1>

      <ul>
        {plants.map((pl) => (
          <li key={pl.id}>
            <Link href={`/plants/${pl.id}`}>{pl.name} →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
