import React, { useState, useRef } from "react";
import "../Styles/Info.css";
import Lean1 from "../Images/Lean1.JPG";
import Lean2 from "../Images/Lean2.JPG";

export const Info = () => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.pageX || e.touches[0].pageX);
    setPrevTranslate(currentTranslate);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const x = e.pageX || e.touches[0].pageX;
    const translate = prevTranslate + (x - startX);
    setCurrentTranslate(translate);
  };

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
            para buscar una mejor salida en otro pías son de mis metas mas
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
