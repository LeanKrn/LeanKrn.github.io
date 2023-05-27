import "./App.css";
import React from "react";
import { Home } from "./Components/Home";
import { Info } from "./Components/Info";
import { Proyectos } from "./Components/Proyectos";
import { Contacto } from "./Components/Contacto";
import { Tecnologias } from "./Components/Tecnologias";

function App() {
  return (
    <div>
      <Home />
      <Info />
      <Tecnologias />
      <Proyectos />
      <Contacto />
    </div>
  );
}

export default App;

// Pagina de inicio
// Informacion sobre mi
// Proyectos destacados
// Tecnologias usadas
// Informacion de contacto

// Diseño limpio,profesional y facil de navegar. Tambien que sea responsive
