import { Link } from "wouter";

export const Card = ({ id, apellido, nombre, edad, sexo, estado }) => {
  return (
    <article>
      <Link
        href={`/partners/${id}`}
        className={`block max-w-sm p-6 ${
          estado === "ACT" ? "bg-white" : "bg-red-300"
        } border border-gray-200 rounded-lg shadow-sm ${
          estado === "ACT" ? "hover:bg-gray-100" : "hover:bg-red-400"
        } dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {apellido}, {nombre}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 ">
          Edad: {edad}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Sexo: {sexo}
        </p>

        <span class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Más Detalles
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </span>
      </Link>
    </article>
  );
};
