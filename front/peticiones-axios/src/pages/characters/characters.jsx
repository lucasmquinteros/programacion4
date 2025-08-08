import { getAllCharacters } from "../../services/dragon-ball-api";
import CardCharacter from "../../components/characters/card-character";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { useLocation } from "wouter";

export default function Characters() {
  const { data, isLoading } = useReq({ promise: getAllCharacters });
  const [location, navigate] = useLocation();

  if (isLoading) return <Spinner type="primary" />;

  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className=" bg-gray-900 text-white p-10">
      <button onClick={handleClick}>Volver Atras</button>
      <section className="flex flex-wrap justify-center items-center gap-8 w-full mx-auto h-full">
        {data?.items?.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </section>
    </main>
  );
}
