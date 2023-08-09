import React from "react";
import "../Styles/Info.css";
import Lean2 from "../Images/Lean2.JPG";

export const Info = () => {
  return (
    <div className="HomeMain">
      <div className="InfoMain">
        <div className="InfoDiv">
          <h1 className="InfoTitle">
            Leandro <br /> Kronsteiner
          </h1>
          <p className="InfoText">
            Persona altamente motivada y comprometida con el éxito, Dedicación y
            perseverancia ,Estas 2 cosas me llevaron a superar desafíos y
            alcanzar los resultados de hoy en dia, No solo el hecho de formarme
            si no también crecer como persona, Salir de mi entorno de confort
            para buscar una mejor salida en otro país son de mis metas mas
            enorgullecedoras, Además de al mismo tiempo formarme como
            programador FullStack para crecer dia a dia individualmente y en
            equipo
          </p>
        </div>
        <div className="InfoImgDiv">
          {/* <img src={Lean1} alt="Leandro Kronsteiner" /> */}
          <img src={Lean2} alt="Leandro Kronsteiner" />
        </div>
      </div>
    </div>
  );
};
