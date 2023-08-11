import Logo from "../Images/Logo.png";
import "../Styles/Home.css";
import ParticlesAnimation from "./Particles";

export const Home = () => {
  return (
    <div className="HomeMain">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Asegura que el contenedor de partículas esté detrás de otros elementos
        }}
      >
        <ParticlesAnimation />
      </div>
      <div className="DivLogo">
        <img alt="LeanKrn" src={Logo} className="ImgLogo" />
        <h1 className="H1Logo">FullStack Developer</h1>
      </div>
    </div>
  );
};
