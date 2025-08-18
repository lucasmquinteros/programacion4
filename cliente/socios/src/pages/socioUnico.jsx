import { Link, useParams } from "wouter";
import sociosinfo from "../data/sociosinfo.json";

export default function PlantDetail() {
  const { id } = useParams();
  const socio = sociosinfo.find((socio) => socio.id === Number(id));

  return (
    <div>
      <h1>Id: {id}</h1>
      <p>Nombre: {plant.name}</p>
      <Link href="/plants">Go Back</Link>
    </div>
  );
}
