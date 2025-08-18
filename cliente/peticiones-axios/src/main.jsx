import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode> //el strict mode es una caracteristica de react de modo de desarrollo que hace que aparezcan en la consola dos veces la info
);
