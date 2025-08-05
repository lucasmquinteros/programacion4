import { useEffect, useState } from "react";
import {
  getAllCharacters,
  getOneCharacterByName,
} from "../../services/dragon-ball-api";
import CardCharacter from "../../components/characters/card-character";

export const Characters = () => {
  const [chars, setChars] = useState([]); // chars -> characters
  useEffect(() => {
    getAllCharacters().then((data) => setChars(data?.items));
  }, []);
  return (
    <main className=" bg-gray-950 text-white p-10">
      <section className="flex flex-wrap justify-center items-center gap-4 w-full mx-auto">
        {chars.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </section>
    </main>
  );
};
