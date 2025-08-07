import { useEffect, useState } from "react";
import { useParams } from "wouter";
import { getOneCharacterById } from "../../services/dragon-ball-api/charactes";
export default function CharacterDetail() {
  const { id } = useParams();
  const [char, setChar] = useState({});

  useEffect(() => {
    getOneCharacterById(id).then((d) => {
      setChar(d);
    });
  }, [id]);
  return (
    <main>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={char.image}
            className="max-w-sm rounded-lg shadow-2xl h-80"
          />
          <div>
            <h1 className="text-5xl font-bold">{char.name}!</h1>
            <p className="py-6 max-h-60 overflow-y-scroll">
              {char.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
