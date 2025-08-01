import { useParams } from "wouter";
import socios from "./../socios.json";
import { Page404 } from "./page404";

export const PartnerDetails = () => {
  const { id } = useParams();
  const partner = socios.find((s) => s.id === Number(id));

  console.log("a");
  if (partner == null) {
    return <Page404 />;
  }

  return (
    <main>
      <h1>{partner.nombre}</h1>
    </main>
  );
};
