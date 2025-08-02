import { Card } from "../components/card";
import socios from "./../socios.json";

export const Partners = () => {
  return (
    <main className="m-5">
      <section className="flex justify-center items-center mx-auto gap-5 flex-wrap w-4/5 ">
        {socios.map((socio) => (
          <Card
            key={socio.id}
            id={socio.id}
            apellido={socio.apellido}
            nombre={socio.nombre}
            edad={socio.edad}
            sexo={socio.sexo}
            peso={socio.peso}
            altura={socio.altura}
            estado={socio.estado}
          ></Card>
        ))}
      </section>
    </main>
  );
};
