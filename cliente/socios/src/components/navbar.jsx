import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md static w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">MiLogo</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-indigo-600">
              Inicio
            </a>
            <a href="/socios" className="hover:text-indigo-600">
              Socios
            </a>
            <a href="#" className="hover:text-indigo-600">
              Nosotros
            </a>
            <a href="#" className="hover:text-indigo-600">
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <HiX className="h-6 w-6 text-gray-800" />
              ) : (
                <HiMenu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow">
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Inicio
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Servicios
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Nosotros
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
