import "../Styles/Contacto.css";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";

export const Contacto = () => {
  return (
    <div className="DivCont">
      <div style={{ margin: "auto" }}>
        <h3 className="h3Cont">
          No dudes en contactarme ante cualquier duda o Recomendacion
        </h3>
      </div>
      <div className="LinkCont">
        <div>
          <a
            href="https://www.linkedin.com/in/leankrn/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontSize: "2.2rem", letterSpacing: "3px" }}
          >
            {/* Likedin */}
            <BsLinkedin size={50} />
          </a>
        </div>

        <div>
          <a
            href="https://github.com/LeanKrn"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontSize: "2.2rem", letterSpacing: "3px" }}
          >
            <BsGithub size={50} />
          </a>
        </div>
        <div>
          <a
            href="https://wa.me/+5522992282624"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontSize: "2.2rem", letterSpacing: "3px" }}
          >
            <BsWhatsapp size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};
