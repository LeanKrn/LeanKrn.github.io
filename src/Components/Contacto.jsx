export const Contacto = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        border: "1px solid white",
        margin: "0.777%",
        height: "20rem",
        padding: "1%",
      }}
    >
      <div style={{ margin: "auto" }}>
        <h3 style={{ letterSpacing: "5px" }}>
          No dudes en contactarme ante cualquier duda o Recomendacion
        </h3>
      </div>
      <div style={{ display: "Flex", justifyContent: "space-around" }}>
        <div>
          <a
            href="https://www.linkedin.com/in/leankrn/"
            target="_blank"
            style={{ color: "white", fontSize: "2.2rem", letterSpacing: "3px" }}
          >
            Likedind
          </a>
        </div>

        <div>
          <a
            href="https://wa.me/+5522992282624"
            target="_blank"
            style={{ color: "white", fontSize: "2.2rem", letterSpacing: "3px" }}
          >
            Whatsapp
          </a>
        </div>
      </div>
    </div>
  );
};
