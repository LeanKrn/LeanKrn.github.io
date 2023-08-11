import "./App.css";
import React, { useEffect, useState } from "react";
import { Home } from "./Components/Home";
import { Info } from "./Components/Info";
import { Proyectos } from "./Components/Proyectos";
import { Contacto } from "./Components/Contacto";
import { Tecnologias } from "./Components/Tecnologias";
import ReactFlagsSelect from "react-flags-select";

function App() {
  const [browserLanguage, setBrowserLanguage] = useState("");
  const [colors, setColors] = useState({
    Primario: "#f1f1f1",
    Secundario: "#808080",
    Fondo: "#2f2f2f",
    FondoSecundario: "",
    apollo: "#ffff47",
  });
  const selectIdioma = {
    en: "Select Language",
    es: "Seleccionar Idioma",
    pt: "Selecionar Idioma",
  };

  const setearIdiomas = (languageCode) => {
    if (["es", "en", "pt"].includes(languageCode)) {
      setBrowserLanguage(languageCode);
    } else {
      setBrowserLanguage("en");
    }
  };

  useEffect(() => {
    // Detectar el idioma del navegador al cargar la página
    const detectedLanguage = navigator.language || navigator.userLanguage;
    const languageCode = detectedLanguage.slice(0, 2); // Obtener las dos primeras letras

    // Verificar si languageCode es "es", "en" o "pt", de lo contrario establecerlo en "en"
    setearIdiomas(languageCode);
  }, []);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          padding: "1rem",
        }}
      >
        <ReactFlagsSelect
          countries={["US", "PT", "ES"]}
          customLabels={{
            US: "EN",
            PT: "PT",
            ES: "ES",
          }}
          selected={browserLanguage}
          onSelect={(code) => setearIdiomas(code.toLowerCase())}
          placeholder={selectIdioma[browserLanguage]}
        />
      </div>
      <Home colors={colors} setColors={setColors} />
      <Info Lenguage={browserLanguage} colors={colors} />
      <Tecnologias colors={colors} />
      <Proyectos Lenguage={browserLanguage} colors={colors} />
      <Contacto Lenguage={browserLanguage} colors={colors} />
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
