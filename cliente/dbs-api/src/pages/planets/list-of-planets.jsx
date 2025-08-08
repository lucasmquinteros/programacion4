import CardPlanet from "@/components/planets/card-planet";
import { getAllPlanets } from "@/services/dragon-ball-api";
import { useEffect, useState } from "react";

export default function ListOfPlanets() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    getAllPlanets().then((data) => setPlanets(data?.items));
  }, []);
  return (
    <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
      {planets.map((pl) => (
        <CardPlanet key={pl.id} {...pl} />
      ))}
    </main>
  );
}
