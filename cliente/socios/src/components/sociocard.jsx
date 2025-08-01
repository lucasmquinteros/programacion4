import { useEffect, useState } from "react";

const SocioCard = ({ socio }) => {
  const [estado, setEstado] = useState(socio.estado && true);
  useEffect(() => {}, [estado]);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-full sm:w-80">
      <h2 className="text-xl font-semibold text-gray-800">
        {socio.nombre} {socio.apellido}
      </h2>
      <p className="text-sm text-gray-600">
        Plan: <span className="font-medium">{socio.plan}</span>
      </p>
      <p className="text-sm text-gray-600">Edad: {socio.edad} años</p>
      <p className="text-sm text-gray-600">Sexo: {socio.sexo}</p>
      <p className="text-sm text-gray-600">Peso: {socio.peso} kg</p>
      <p className="text-sm text-gray-600">Altura: {socio.altura} m</p>
      <p className="text-sm text-gray-600">Teléfono: {socio.telefono}</p>
      <p
        className={`text-sm font-semibold ${
          socio.estado === "ACT" ? "text-green-600" : "text-red-600"
        }`}
      >
        Estado: {socio.estado}
      </p>
    </div>
  );
};

export default SocioCard;
