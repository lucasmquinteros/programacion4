import CardCharacter from "@/components/characters/card-character";
import Spinner from "@/components/spinner";
import { useReq } from "@/hooks/use-req";
import { getAllCharacters } from "@/services/dragon-ball-api";
import { useEffect, useState } from "react";

export default function ListOfCharacters() {
  const { data, isLoading } = useReq({ promise: getAllCharacters });

  if (isLoading) {
    return <Spinner type="info" />;
  }

  return (
    <main className="flex flex-wrap justify-center p-8 gap-1.5 w-full">
      {data?.items?.map((ch) => (
        <CardCharacter key={ch.id} {...ch} />
      ))}
    </main>
  );
}
