import "../Styles/Proyecto.css";
import { Card, Button, Modal } from "antd";
import { useState } from "react";
import { FaLink } from "react-icons/fa";

export const Proyectos = ({ Lenguage, colors }) => {
  const info = [
    {
      Title: "Calyaan",
      en: "Home massage service e-commerce that covers the entire area of Bogota, Colombia. Managing stock with schedule and date, payments control for professionals, Settlement for the professionals offering their services, Settlement management with their respective services, Invoice control, Discount coupons, Payment gateways, User management, Professionals and Admins",
      es: "E-commerce de servicios de masajes a domicilio que abarca toda el área de Bogotá, Colombia. Gestión de stock con horario y fecha, control de pagos para profesionales, Liquidación para los profesionales que ofrecen sus servicios, Gestión de liquidaciones con sus respectivos servicios, Control de facturas, Cupones de descuento, Pasarelas de pago, Gestión de usuarios, Profesionales y Administradores",
      pt: "E-commerce de serviços de massagem em casa que abrange toda a área de Bogotá, Colômbia. Gerenciamento de estoque com horário e data, controle de pagamentos para profissionais, Liquidação para os profissionais que oferecem seus serviços, Gerenciamento de liquidações com seus respectivos serviços, Controle de faturas, Cupons de desconto, Portais de pagamento, Gerenciamento de usuários, Profissionais e Administradores",
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

      en: "Website created to provide information about a Brazilian tourism company and also provide information about the history of its location",
      es: "Sitio web creado para proporcionar información sobre una empresa brasileña de turismo y también brindar información sobre la historia de su ubicación",
      pt: "Site criado para fornecer informações sobre uma empresa brasileira de turismo e também fornecer informações sobre a história de sua localização",

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
      en: "App designed and developed for an e-commerce of technology components. Group work where the most interesting implemented technologies are: Authentication, Search, Filters, Sorting, User and publication banning, Password recovery email, and Purchase confirmed with the user's ticket, Administrator routes where publications and users are controlled, etc.",
      es: "Aplicación diseñada y desarrollada para un e-commerce de componentes de tecnología. Trabajo en grupo donde las tecnologías implementadas más interesantes son: Autenticación, Búsqueda, Filtros, Ordenamiento, Bloqueo de usuarios y publicaciones, Email de recuperación de contraseña, y Compra confirmada con el ticket del usuario, Rutas de administrador donde se controlan publicaciones y usuarios, etc.",
      pt: "Aplicativo projetado e desenvolvido para um e-commerce de componentes de tecnologia. Trabalho em grupo onde as tecnologias implementadas mais interessantes são: Autenticação, Busca, Filtros, Ordenação, Bloqueio de usuários e publicações, Email de recuperação de senha e Compra confirmada com o ticket do usuário, Rotas de administrador onde são controladas publicações e usuários, etc.",
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
      en: "App designed and developed to provide information about recipes that includes: Search, Filters, Sorting, Database, Queries to an external API, etc. The frontend is composed of React, Redux, and styled components.",
      es: "Aplicación diseñada y desarrollada para proporcionar información sobre recetas que incluye: Búsqueda, Filtros, Ordenamientos, Base de datos, Consultas a una API externa, etc. El frontend está compuesto por React, Redux y styled components.",
      pt: "Aplicativo projetado e desenvolvido para fornecer informações sobre receitas que incluem: Busca, Filtros, Ordenação, Banco de dados, Consultas a uma API externa, etc. O frontend é composto por React, Redux e styled components.",
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
      en: "App designed and developed to provide information in the form of cards about the characters from Rick and Morty: Search, Queries to an external API, etc. The frontend is composed of React, Redux, and styled components.",
      es: "Aplicación diseñada y desarrollada para proporcionar información en forma de tarjetas sobre los personajes de Rick y Morty: Búsqueda, Consultas a una API externa, etc. El frontend está compuesto por React, Redux y styled components.",
      pt: "Aplicativo projetado e desenvolvido para fornecer informações em forma de cartões sobre os personagens de Rick and Morty: Busca, Consultas a uma API externa, etc. O frontend é composto por React, Redux e styled components.",
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
      en: "React Native app designed to display information about Pokémon, where the most interesting features are Authentication, Favorites saving, and infinite scrolling.",
      es: "Aplicación de React Native diseñada para mostrar información sobre Pokémon, donde las características más interesantes son la Autenticación, el Guardado de favoritos y el desplazamiento infinito.",
      pt: "Aplicativo React Native projetado para exibir informações sobre Pokémon, onde os recursos mais interessantes são Autenticação, Salvar favoritos e rolagem infinita.",
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
                    <p>{card[Lenguage]}</p>
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
