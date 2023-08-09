import "../Styles/Proyecto.css";
import { Card, Button, Modal } from "antd";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

export const Proyectos = ({ colors }) => {
  const info = [
    {
      Title: "Calyaan",
      Text: "Eccomerse de servicios de masajes a domicilio que abarca toda la zona de bogota,Colombia. Teniendo control de stock con horario y fecha, control de pagos a profesionales, Liquidacion a los profesionales que ofrecen sus servicios, Control de liquidaciones con sus respectivos servicios,Control de facturas, Cupones de descuento, Pasarelas de pago, Control de usuarios,Profesionales y Admin's ",
      Front: ["React", "Redux", "Tailwind", "Ant desing"],
      Back: [
        "NodeJS",
        "ExpressJS",
        "Mongoose",
        "Cloudinary",
        "Mercado pago api",
        "Auth",
      ],
      Database: ["MongoDB", "MongoDB Atlas"],
      Demo: "https://calyaan.netlify.app",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1691586503/Captura_de_pantalla_2023-08-09_100703_yqkwgp.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1691586503/Captura_de_pantalla_2023-08-09_100633_picmrb.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1691586503/Captura_de_pantalla_2023-08-09_100652_thl2mq.png",
      ],
    },
    {
      Title: "Essencia lagos",
      Text: "Web site creado para dar informacion de una empresa brasilera de turismo y a su vez dar informacion sobre la historia de donde se localiza",
      Front: ["React native", "Style Components"],
      Demo: "https://essencialagos.com/",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886088/Captura_de_pantalla_2023-06-04_103648_w8bpx8.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886089/Captura_de_pantalla_2023-06-04_103700_z6jyn6.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886087/Captura_de_pantalla_2023-06-04_103718_zvn8y4.png",
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
      Title: "Keran´s food",
      Text: "App diseñada y desarrollada para dar informacion de recetas que incluye:Busqueda,Filtros,Ordenamientos,Base de datos, Consultas a una api externa etc. El front se compone de React,Redux y style components,",
      Front: ["React", "Redux", "Style Components"],
      Back: ["NodeJS", "ExpressJS"],
      Database: ["PostgresSQL", "Sequelize"],
      Repository: "https://github.com/LeanKrn/PI-Food-main",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886088/Captura_de_pantalla_2023-06-04_103919_b8xe5t.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886087/Captura_de_pantalla_2023-06-04_103935_ao6t5m.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886087/Captura_de_pantalla_2023-06-04_104029_tu47i5.png",
      ],
    },
    {
      Title: "Rick And Morty",
      Text: "App diseñada y desarrollada para dar informacion en forma de cards sobre los personajes de rick and morty:Busqueda, Consultas a una api externa etc. El front se compone de React,Redux y style components",
      Front: ["React", "Redux", "Style Components"],

      Repository: "",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886196/Captura_de_pantalla_2023-06-04_104157_zyezii.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886197/Captura_de_pantalla_2023-06-04_104253_zr8qwc.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886196/Captura_de_pantalla_2023-06-04_104303_hpisnr.png",
      ],
    },

    {
      Title: "Pokedex Mobile",
      Text: "App de react native diseñada para mostrar informacion sobre pokemones,donde lo mas interesante es la Authenticacion,Guardado de favoritos y paginado infinito",
      Front: ["React native", "Redux", "Style Components"],
      Repository: "https://github.com/LeanKrn/PokedexKRN",
      Demo: "",
      image: [
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886654/Captura_de_pantalla_2023-06-04_105016_aa7lz1.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886654/Captura_de_pantalla_2023-06-04_105000_v1hdfq.png",
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685886654/Captura_de_pantalla_2023-06-04_104944_sbtqu4.png",
      ],
    },
  ];

  const [modalStates, setModalStates] = useState(info.map(() => false));

  const showModal = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = true;
    setModalStates(updatedModalStates);
  };

  const handleOk = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = false;
    setModalStates(updatedModalStates);
  };

  const handleCancel = (index) => {
    const updatedModalStates = [...modalStates];
    updatedModalStates[index] = false;
    setModalStates(updatedModalStates);
  };

  // const { Meta } = Card;
  return (
    <div className="ProyectosMain">
      <h2 className="ProyectTitle">Proyectos</h2>
      <div className="ProyectDiv">
        {info.map((card, index) => (
          <Card
            hoverable
            key={index}
            style={{
              width: 340,
            }}
            cover={
              <div style={{ height: "32rem" }}>
                {card.image.map((img, imgIndex) => (
                  <img
                    key={imgIndex}
                    style={{
                      height: "33.3%",
                      objectFit: "cover",
                      width: "100%",
                    }}
                    alt={card.Title}
                    src={img}
                  />
                ))}
              </div>
            }
          >
            <Card.Meta
              title={card.Title}
              description={
                <div>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: colors.Secundario,
                      color: colors.Primario,
                    }}
                    onClick={() => showModal(index)}
                  >
                    Mas info
                  </Button>
                  <Modal
                    title={card.Title}
                    visible={modalStates[index]}
                    onOk={() => handleOk(index)}
                    onCancel={() => handleCancel(index)}
                  >
                    <hr></hr>
                    <p>{card.Text}</p>
                    <hr></hr>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        gap: "1rem",
                      }}
                    >
                      {card.Front && (
                        <div style={{ width: "45%" }}>
                          <b>Front</b>
                          {card.Front?.map((f) => (
                            <p>
                              {f}
                              <hr />
                            </p>
                          ))}
                        </div>
                      )}
                      {card.Back && (
                        <div style={{ width: "45%" }}>
                          <b>Back</b>
                          {card.Back?.map((b) => (
                            <p>
                              {b}
                              <hr />
                            </p>
                          ))}
                        </div>
                      )}
                      {card.Database && (
                        <div style={{ width: "45%" }}>
                          <b>Database</b>
                          {card.Database?.map((d) => (
                            <p>
                              {d}
                              <hr />
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                    {card.Demo && (
                      <a href={card.Demo} target="_blank" rel="noreferrer">
                        Demo {<FaLink />}
                      </a>
                    )}
                    {card.Repository && (
                      <a
                        href={card.Repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repositorio {<FaLink />}
                      </a>
                    )}
                  </Modal>
                </div>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};
