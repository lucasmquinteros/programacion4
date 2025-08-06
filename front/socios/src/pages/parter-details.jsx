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
    <main className=" p-5">
      <div className=" ml-80">
        <h1 className="text-4xl">{partner.nombre}</h1>
        <div className="p-3">
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Edad: {partner.edad}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Sexo: {partner.sexo}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Edad: {partner.edad}
          </p>
          <p className="font-normal ">
            IMC: {(partner.peso / (partner.altura * partner.altura)).toFixed(2)}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Plan: {partner.plan}
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
            Telefono: {partner.telefono}
          </p>
        </div>
      </div>
    </main>
  );
};
