import CardCharacter from "./card-character";
import { useState, useEffect } from "react";
import { getAllCharacters } from "../../../services/dragon-ball-api";
export default function ListOfCharacters() {
  const [chars, setChars] = useState([]); //una lista de characters
  useEffect(() => {
    getAllCharacters().then((data) => setChars(data.items));
  }, []);
  return (
    <main className="flex flex-wrap p-8 gap-1 w-full">
      {chars?.map((ch) => (
        <CardCharacter key={ch.id} {...ch} />
      ))}
    </main>
  );
}
