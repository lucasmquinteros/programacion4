import socios from "../socios.json";
import { Link } from "wouter";

export default function Socios() {
  <main>
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Lista de socios
        </h5>
      </div>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              {socios.map((s) => (
                <p key={s.id}>
                  <div className="shrink-0">
                    <Link href={`/socios/${s.id}`}>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        ${s.apellido}
                      </p>
                    </Link>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <Link href={`/socios/${s.id}`}>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        ${s.nombre}
                      </p>
                    </Link>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <Link href={`/socios/${s.id}`}>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        ${s.plan}
                      </p>
                    </Link>
                  </div>
                </p>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </main>;
}
