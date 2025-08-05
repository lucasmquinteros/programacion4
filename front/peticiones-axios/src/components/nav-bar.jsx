import { Link } from "wouter";

export default function NavBar() {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
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
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}
