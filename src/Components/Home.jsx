import Logo from "../Images/Logo.png";
import Background from "../Images/Background.png";
import "../Styles/Home.css";

export const Home = () => {
  return (
    <div className="HomeMain" style={{ backgroundImage: `url(${Background})` }}>
      <div className="DivLogo">
        <img alt="LeanKrn" src={Logo} className="ImgLogo" />
        <h1 className="H1Logo">FullStack Developer</h1>
      </div>
    </div>
  );
};
