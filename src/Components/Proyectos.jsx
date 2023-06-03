import "../Styles/Proyecto.css";

export const Proyectos = () => {
  const info = [
    {
      Title: "Keran´s food",
      Text: "App diseñada y desarrollada para dar informacion de recetas que incluye:Busqueda,Filtros,Ordenamientos,Base de datos, Consultas a una api externa etc. El front se compone de React,Redux y style components,",
      Front: ["React", "Redux", "Style Components"],
      Back: ["NodeJS", "ExpressJS"],
      Database: ["PostgresSQL", "Sequelize"],
      Repository: "https://github.com/LeanKrn/PI-Food-main",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150920_ntatwj.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150937_vmxhep.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150951_riwwhh.png",
      ],
    },
    {
      Title: "Rick And Morty",
      Text: "App diseñada y desarrollada para dar informacion en forma de cards sobre los personajes de rick and morty:Busqueda, Consultas a una api externa etc. El front se compone de React,Redux y style components",
      Front: ["React", "Redux", "Style Components"],

      Repository: "",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150920_ntatwj.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150937_vmxhep.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150951_riwwhh.png",
      ],
    },
    {
      Title: "Computer Store",
      Text: "App diseñada y desarrollada sobre un eccomerse de componentes de tecnologia, Trabajo en grupo donde las tecnoligas implementadas mas interesantes son:Authenticacion, Busqueda, Filtros, Ordenamiento, Baneo de usuarios y publicaciones, Email de recuperacion de contraseña y Compra confirmada con el ticket del usuario, Rutas de administrador donde se controlan publicaciones y usuarios, Etc.",
      Front: ["React", "Redux", "Style Components"],
      Back: ["NodeJS", "ExpressJS", "Cloudinary", "Mercado pago api", "Auth"],
      Database: ["PostgresSQL", "Sequelize"],
      Repository: "",
      Demo: "https://compstore.netlify.app/",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150920_ntatwj.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150937_vmxhep.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150951_riwwhh.png",
      ],
    },
    {
      Title: "Pokedex Mobile",
      Text: "App de react native diseñada para mostrar informacion sobre pokemones,donde lo mas interesante es la Authenticacion,Guardado de favoritos y paginado infinito",
      Front: ["React native", "Redux", "Style Components"],
      Repository: "https://github.com/LeanKrn/PokedexKRN",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150920_ntatwj.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150937_vmxhep.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150951_riwwhh.png",
      ],
    },
    {
      Title: "Essencia lagos",
      Text: "Web site creado para dar informacion de una empresa brasilera de turismo y a su vez dar informacion sobre la historia de donde se localiza",
      Front: ["React native", "Style Components"],
      Demo: "essencialagos.com/",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150920_ntatwj.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150937_vmxhep.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685556628/Captura_de_pantalla_2023-05-31_150951_riwwhh.png",
      ],
    },
  ];
  return (
    <div className="ProyectosMain">
      <h2 className="ProyectTitle">Proyectos</h2>
      <div className="ProyectDiv">
        {info.map((Proyect) => (
          <div className="InfoProyectDiv">
            <div className="ImagenProvisoria">
              {Proyect.image.map((img) => (
                <img alt={info.Title} src={img} />
              ))}
            </div>
            <div className="DivHidden">
              <h3 className="TitleInfoProyect">{Proyect.Title}</h3>
              <p className="TextInfoProyect">{Proyect.Text}</p>
              <h3>Front-End</h3>
              <div className="TecFrontDiv">
                {Proyect.Front.map((Tec) => (
                  <p className="FrontTec"> {Tec} </p>
                ))}
              </div>
              {Proyect.Back ? (
                <>
                  <h3>Back-End</h3>
                  <div className="TecFrontDiv">
                    {Proyect.Back.map((Tec) => (
                      <p className="FrontTec"> {Tec} </p>
                    ))}
                  </div>
                </>
              ) : null}
              {Proyect.Database ? (
                <>
                  <h4>Data Base</h4>
                  <div className="TecFrontDiv">
                    {Proyect.Database.map((Tec) => (
                      <p className="FrontTec"> {Tec} </p>
                    ))}
                  </div>
                </>
              ) : null}
              <div className="DivLinksProyect">
                {Proyect.Repository ? (
                  <a href={Proyect.Repository} target="_blank" rel="noreferrer">
                    Respository
                  </a>
                ) : null}
                {Proyect.Demo ? (
                  <a href={Proyect.Demo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
