import "../Styles/Contacto.css";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { ContactUs } from "./EmailJS";

export const Contacto = ({ Lenguage }) => {
  const translations = {
    es: "No dudes en contactarme ante cualquier duda o recomendación",
    en: "Feel free to contact me with any questions or recommendations",
    pt: "Não hesite em entrar em contato comigo se tiver alguma dúvida ou recomendação",
  };
  return (
    <div className="DivCont">
      <div style={{ margin: "auto" }}>
        <h3 className="h3Cont">{translations[Lenguage]}</h3>
      </div>
      <div>
        <ContactUs Lenguage={Lenguage ? Lenguage : "es"} />
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
