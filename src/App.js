import "./App.css";
import React, { useState } from "react";
import { Home } from "./Components/Home";
import { Info } from "./Components/Info";
import { Proyectos } from "./Components/Proyectos";
import { Contacto } from "./Components/Contacto";
import { Tecnologias } from "./Components/Tecnologias";

function App() {
  const [colors, setColors] = useState({
    Primario: "#f1f1f1",
    Secundario: "#808080",
    Fondo: "#2f2f2f",
    FondoSecundario: "",
    apollo: "#ffff47",
  });

  return (
    <div>
      <Home colors={colors} setColors={setColors} />
      <Info colors={colors} />
      <Tecnologias colors={colors} />
      <Proyectos colors={colors} />
      <Contacto colors={colors} />
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
