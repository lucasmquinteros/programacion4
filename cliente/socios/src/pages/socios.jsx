import SocioCard from "../components/sociocard";
import sociosinfo from "../data/sociosinfo.json";
export default function Socios() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Lista de Socios</h1>
        <div className="flex flex-wrap justify-center gap-4">
          {sociosinfo.map((socio) => (
            <SocioCard key={socio.id} socio={socio} />
          ))}
        </div>
      </div>
    </>
  );
}
