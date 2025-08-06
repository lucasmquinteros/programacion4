import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { getOneCharacterById } from "@/services/dragon-ball-api";

export default function DetailCharacter() {
  const { id } = useParams();

  const [char, setChar] = useState({});
  useEffect(() => {
    getOneCharacterById(id).then((d) => setChar(d));
  }, [id]);

  console.log(char);

  return (
    <main className=" bg-gray-950 text-white h-screen">
      <section className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
