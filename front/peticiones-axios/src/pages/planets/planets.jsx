import CardPlanets from "@/components/planets/card-planets";
import { getAllPlanets } from "@/services/dragon-ball-api";
import { useEffect, useState } from "react";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    getAllPlanets().then((data) => setPlanets(data?.items));
  }, []);

  return (
    <main className=" bg-gray-900 text-white p-10 ">
      <section className="flex flex-wrap justify-center items-center gap-4 w-full mx-auto h-full">
        {planets.map((pl) => (
          <CardPlanets key={pl.id} {...pl} />
        ))}
      </section>
    </main>
  );
}
