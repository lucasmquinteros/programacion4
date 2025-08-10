import History from "@/components/history";
import CardPlanets from "@/components/planets/card-planets";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { getAllPlanets } from "@/services/dragon-ball-api";

export default function Planets() {
  const { data, isLoading } = useReq({ promise: getAllPlanets });

  if (isLoading) return <Spinner type="primary" />;

  return (
    <main className=" bg-gray-900 text-white p-10 ">
      <History />
      <section className="flex flex-wrap justify-center items-center gap-8 w-full mx-auto h-full mb-20">
        {data?.items?.map((pl) => (
          <CardPlanets key={pl.id} {...pl} />
        ))}
      </section>
    </main>
  );
}
