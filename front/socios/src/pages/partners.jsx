import { Card } from "../components/card";
import socios from "./../socios.json";

export const Partners = () => {
  return (
    <main>
      <section>
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
