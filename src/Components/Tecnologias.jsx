import "../Styles/Tecnologias.css";

export const Tecnologias = () => {
  const Tecno = [
    {
      name: "JavaScript",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/JavaScript_ibufzg.png",
    },
    {
      name: "Python",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/Python_lkteyd.png",
    },
    {
      name: "React",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/React_nng0oi.png",
    },
    {
      name: "Redux",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117384/Redux_w2ef7l.png",
    },
    {
      name: "NodeJs",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/NodeJS_yrthv8.png",
    },
    {
      name: "PostgreSQL",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/PostgresSQL_f4tsuo.png",
    },
    {
      name: "Sequilize",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117384/Sequelize_dbo5ll.png",
    },
    {
      name: "MySQL",
      image:
        "https://res.cloudinary.com/dtfppvicy/image/upload/v1685117383/MySQL_th2wzb.png",
    },
  ];

  return (
    <div>
      <h2 className="TecTitle">Tecnologias mas relevantes</h2>
      <div class="logos">
        <div class="logos-slide">
          {Tecno.map((Tec) => (
            <img src={Tec.image} alt={Tec.name} />
          ))}
        </div>

        <div class="logos-slide">
          {Tecno.map((Tec) => (
            <img src={Tec.image} alt={Tec.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
