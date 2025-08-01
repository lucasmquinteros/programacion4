import SocioCard from "../components/sociocard";
import socios from "../socios.json";
export default function socios() {
  return (
    <ul>
      {socios.map((socio) => {
        <li>
          <SocioCard key={socio.id} socio={socio} />
        </li>;
      })}
    </ul>
  );
}
