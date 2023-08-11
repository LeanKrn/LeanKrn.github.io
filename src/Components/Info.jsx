import React from "react";
import "../Styles/Info.css";
import Lean2 from "../Images/Lean2.JPG";

export const Info = ({ Lenguage }) => {
  const selectIdioma = {
    en: "Highly motivated and dedicated to success, Dedication and perseverance, These two things have led me to overcome challenges and achieve the results of today, Not only the fact of educating myself, but also growing as a person, Stepping out of my comfort zone to seek a better opportunity in another country are among my proudest goals, In addition to simultaneously training as a FullStack developer to grow day by day individually and as a team",
    es: "Persona altamente motivada y comprometida con el éxito, Dedicación y perseverancia, Estas dos cosas me han llevado a superar desafíos y alcanzar los resultados de hoy en día, No solo el hecho de formarme, sino también crecer como persona, Salir de mi zona de confort para buscar una mejor oportunidad en otro país son algunos de mis objetivos más orgullosos, Además de formarme al mismo tiempo como desarrollador FullStack para crecer día a día individualmente y en equipo",
    pt: "Pessoa altamente motivada e comprometida com o sucesso, Dedicação e perseverança, Essas duas coisas me levaram a superar desafios e alcançar os resultados de hoje, Não apenas o fato de me educar, mas também crescer como pessoa, Sair da minha zona de conforto em busca de uma oportunidade melhor em outro país está entre os meus objetivos mais orgulhosos, Além de me formar ao mesmo tempo como desenvolvedor FullStack para crescer dia a dia individualmente e em equipe",
  };

  return (
    <div className="HomeMain">
      <div className="InfoMain">
        <div className="InfoDiv">
          <h1 className="InfoTitle">
            Leandro <br /> Kronsteiner
          </h1>
          <p className="InfoText">{selectIdioma[Lenguage]}</p>
        </div>
        <div className="InfoImgDiv">
          {/* <img src={Lean1} alt="Leandro Kronsteiner" /> */}
          <img src={Lean2} alt="Leandro Kronsteiner" />
        </div>
      </div>
    </div>
  );
};
