import { Link } from "wouter";

export default function NavBar() {
  return (
    <div className="navbar bg-gray-950 text-white shadow-sm sticky top-0 z-10">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          DragonBall - API
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/characters">Personajes</Link>
          </li>
          <li>
            <Link href="/planets">Planetas</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          className="btn"
          href="https://web.dragonball-api.com/"
          target="_blank"
        >
          Visitar página original
        </a>
      </div>
    </div>
  );
}
