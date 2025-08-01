import { Link, useParams } from "wouter";
import plants from "../data";

export default function PlantDetail() {
  const { id } = useParams();
  const plant = plants.find((pl) => pl.id === Number(id));

  if (plant == null) {
    return <Page404 />;
  }
  return (
    <div>
      <h2>Id flower: {id}</h2>
      <p>nombre de la planta: {plant.name}</p>
      <Link href="/plants">← Go back</Link>
    </div>
  );
}
