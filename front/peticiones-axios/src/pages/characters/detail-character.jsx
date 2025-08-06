import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { getOneCharacterById } from "@/services/dragon-ball-api";
import CardTransformation from "@/components/characters/card-transformation";

export default function DetailCharacter() {
  const { id } = useParams();

  const [char, setChar] = useState({});
  useEffect(() => {
    getOneCharacterById(id).then((d) => setChar(d));
  }, [id]);

  return (
    <main className=" bg-gray-900 text-white p-10 ">
      <section className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={char.image} className="h-[600px] rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{char.name}</h1>
            <p className="py-6">Ki: {char.ki}</p>
            <p className="py-6">Max Ki: {char.maxKi}</p>
            <p className="py-6">{char.description}</p>
          </div>
        </div>
      </section>
      {char.transformations?.length === 0 ? (
        <h2 className="text-4xl text-center mb-5">
          Este personaje no tiene transformaciones
        </h2>
      ) : (
        <h2 className="text-4xl text-center mb-5">Transformaciones:</h2>
      )}

      <section className="flex flex-wrap justify-center items-center gap-4 w-full mx-auto h-full p-5">
        {char.transformations?.map((ch) => (
          <CardTransformation ter key={ch.id} {...ch} />
        ))}
      </section>
    </main>
  );
}
