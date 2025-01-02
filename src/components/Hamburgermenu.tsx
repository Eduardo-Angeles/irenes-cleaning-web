// Importa el hook useState de Preact
import { useState } from "preact/hooks";

// Define el componente funcional HamburgerMenu
const HamburgerMenu = () => {
  // Declara una variable de estado isOpen y una función setIsOpen para actualizarla
  const [isOpen, setIsOpen] = useState(false);

  // Define una función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Contenedor principal del menú hamburguesa, oculto en pantallas medianas y más grandes
    <div className="relative md:hidden">
      {/* Botón del menú hamburguesa */}
      <button
        onClick={toggleMenu} // Llama a toggleMenu al hacer clic
        type="button" // Tipo explícito añadido aquí
        className="flex items-center justify-center w-10 h-10 bg-[var(--color-bg)] text-white rounded-md focus:outline-none"
        aria-label="Toggle menu" // Etiqueta accesible para el botón
      >
        {/* SVG del icono del menú */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-list text-black dark:text-purple-600 hover:text-purple-600 dark:hover:text-purple-600" // Añadido para cambiar el color según el tema
          viewBox="0 0 16 16"
        >
          <title>Menu icon</title>
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <ul className="flex flex-col p-2">
            <li className="p-2 hover:bg-purple-200 text-purple-600">
              <a href="/">Inicio</a>
            </li>

            <li className="p-2 hover:bg-purple-200 text-purple-600">
              <a href="#services">Servicios</a>
            </li>

            <li className="p-2 hover:bg-purple-200 text-purple-600">
              <a href="#about">ID/About</a>
            </li>

            <a href="#contact">
              <button
                type="button"
                className="w-15 py-4 bg-purple-500 text-white rounded-full hover:bg-purple-600 flex items-center justify-center whitespace-nowrap"
              >
                Contact Us
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Snowman icon</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.651 9.797a.5.5 0 10-.935-.354l-.72 1.905-2.768 1.756a.5.5 0 00.536.845l2.658-1.687h2.046a.5.5 0 100-1h-1.37l.553-1.465z"
                    fill="currentColor"
                    style="animation:snowman-right .5s ease-in-out both alternate-reverse infinite; transform-origin: center"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.349 9.797a.5.5 0 01.935-.354l.72 1.905 2.768 1.756a.5.5 0 01-.536.845l-2.658-1.687H3.532a.5.5 0 010-1h1.37L4.35 9.797z"
                    fill="currentColor"
                    style="animation:snowman-left .5s ease-in-out both alternate-reverse infinite; transform-origin: 56% 57%"
                  />
                  <circle
                    cx="12"
                    cy="15.762"
                    r="4"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="12"
                    cy="8.762"
                    r="2.45"
                    stroke="currentColor"
                    stroke-width=".9"
                  />
                  <rect
                    x="10.75"
                    y="7.909"
                    width="1"
                    height="1"
                    rx=".5"
                    fill="currentColor"
                  />
                  <rect
                    x="12.25"
                    y="7.909"
                    width="1"
                    height="1"
                    rx=".5"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.5 4.5A.5.5 0 0111 4h2a.5.5 0 01.5.5v1c0 .037.004.074.012.109h-3.024A.504.504 0 0010.5 5.5v-1zm-.988 1.109A.502.502 0 019.5 5.5v-1A1.5 1.5 0 0111 3h2a1.5 1.5 0 011.5 1.5v1a.504.504 0 01-.012.109H16a.5.5 0 010 1H8a.5.5 0 010-1h1.512z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

// Exporta el componente HamburgerMenu como el valor predeterminado del módulo
export default HamburgerMenu;
