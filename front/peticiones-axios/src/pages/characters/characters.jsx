import { getAllCharacters } from "../../services/dragon-ball-api";
import CardCharacter from "../../components/characters/card-character";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import History from "@/components/history";

export default function Characters() {
  const { data, isLoading } = useReq({ promise: getAllCharacters });

  if (isLoading) return <Spinner type="primary" />;

  return (
    <main className=" bg-gray-900 text-white p-10">
      <History />
      <section className="flex flex-wrap justify-center items-center gap-8 w-full mx-auto h-full">
        {data?.items?.map((ch) => (
          <CardCharacter key={ch.id} {...ch} />
        ))}
      </section>
    </main>
  );
}
