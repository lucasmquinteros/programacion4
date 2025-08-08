import { useParams } from "wouter";
import { getOnePlanetById } from "@/services/dragon-ball-api";
import CardCharacter from "@/components/characters/card-character";
import { useReq } from "@/hooks/use-req";
import Spinner from "@/components/spinner";

export default function DetailPlanet() {
  const { id } = useParams();

  const { data: planet, isLoading } = useReq({
    promise: () => getOnePlanetById(id),
  });

  if (isLoading) return <Spinner type="primary" />;

  return (
    <main className=" bg-gray-900 text-white p-10 min-h-screen ">
      <section className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={planet?.image}
            className="max-w-sm rounded-lg shadow-2xl min-h-80 aspect-video object-cover"
          />
          <div>
            <h1 className="text-5xl font-bold">{planet?.name}</h1>
            <p className="py-6">
              {planet?.isDestroyed ? "Destruido" : "No destruido"}
            </p>
            <p className="py-6">{planet?.description}</p>
          </div>
        </div>
      </section>
      {planet?.characters?.length === 0 ? (
        <h2 className="text-4xl text-center mb-5">
          No hay personajes que vivan en este planet?a
        </h2>
      ) : (
        <h2 className="text-4xl text-center mb-5">
          Personajes que viven en este planet?a:
        </h2>
      )}

      <section className="flex flex-wrap justify-center items-center gap-4 w-full mx-auto h-full p-5">
        {planet?.characters?.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </section>
    </main>
  );
}
