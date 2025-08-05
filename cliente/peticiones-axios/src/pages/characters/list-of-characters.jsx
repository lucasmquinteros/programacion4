import CardCharacter from "../../components/characters/CardCharacter";
import { getAllCharacters } from "@/services/dragon-ball-api/charactes";
import { useEffect, useState } from "react";
export default function ListOfCharacters() {
  const [chars, setChars] = useState([]);
  useEffect(() => {
    getAllCharacters().then((items) => setChars(items));
  }, []);
  return (
    <main className="flex flex-wrap gap-5 justify-center w-full p-8 ">
      {chars.map((ch) => (
        <CardCharacter key={ch.id} {...ch} />
      ))}
    </main>
  );
}
