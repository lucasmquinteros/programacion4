import { Link } from "wouter";

export default function NavBar() {
  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
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
        <Link href="/" className="btn btn-ghost text-xl">
          DBSApi
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
    </header>
  );
}
