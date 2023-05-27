import "../Styles/Proyecto.css";

export const Proyectos = () => {
  const info = [
    {
      Title: "Eccomerse",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Repository: "",
      Demo: "",
      image: "",
    },
    {
      Title: "Eccomerse",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Repository: "",
      Demo: "",
      image: "",
    },
    {
      Title: "Eccomerse",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Repository: "",
      Demo: "",
      image: "",
    },
    {
      Title: "Eccomerse",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Repository: "",
      Demo: "",
      image: "",
    },
    {
      Title: "Eccomerse",
      Text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      Repository: "",
      Demo: "",
      image: "",
    },
  ];
  return (
    <div className="ProyectosMain">
      <h2 className="ProyectTitle">Proyectos</h2>
      <div className="ProyectDiv">
        {info.map((Proyect) => (
          <div className="InfoProyectDiv">
            <div className="ImagenProvisoria"></div>
            <h3 className="TitleInfoProyect">{Proyect.Title}</h3>
            <p className="TextInfoProyect">{Proyect.Text}</p>
            <div className="DivLinksProyect">
              <a href={Proyect.Repository} target="_blank" rel="noreferrer">
                Respository
              </a>
              <a href={Proyect.Demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
