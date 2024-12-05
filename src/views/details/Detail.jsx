import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Detail = () => {
  const [data, setData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/" + id)
      .then(function (response) {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
  }, [id]);

  const containerStyle = {
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    background: "linear-gradient(135deg, #2E86C1, #1B4F72)",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    textAlign: "center",
  };

  const imageStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "5px solid #FFFFFF",
    marginBottom: "20px",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    marginBottom: "10px",
  };

  const textStyle = {
    fontSize: "1rem",
    margin: "5px 0",
  };

  return (
    <div style={containerStyle}>
      <img src={data.image} alt={data.name} style={imageStyle} />
      <h2 style={titleStyle}>{data.name}</h2>
      <p style={textStyle}>
        <strong>Estado:</strong> {data.status === "Alive" ? "Vivo" : "Muerto"}
      </p>
      <p style={textStyle}>
        <strong>Especie:</strong> {data.species}
      </p>
      <p style={textStyle}>
        <strong>Género:</strong> {data.gender === "Male" ? "Masculino" : "Femenino"}
      </p>
      <p style={textStyle}>
        <strong>Origen:</strong> {data.origin?.name || "Desconocido"}
      </p>
      <p style={textStyle}>
        <strong>Ubicación Actual:</strong> {data.location?.name || "Desconocida"}
      </p>
    </div>
  );
};
