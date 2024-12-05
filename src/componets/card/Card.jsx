import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ item }) => {
    const router = useNavigate();
  const cardStyle = {
    border: '2px solid #FF5733',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    width: '300px',
    margin: '20px auto',
    padding: '15px',
    background: 'linear-gradient(135deg, #2E2E2E, #1C1C1C)',
    color: '#FDFEFE',
    fontFamily: "'Roboto', sans-serif",
    textAlign: 'center',
  };

  const imageStyle = {
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    border: '3px solid #FF5733',
    marginBottom: '10px',
  };

  const buttonStyle = {
    background: '#FF5733',
    border: 'none',
    padding: '10px 20px',
    color: '#FFF',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'background 0.3s',
  };

  const buttonHoverStyle = {
    background: '#C70039',
  };

  const handleMouseOver = (e) => {
    e.target.style.background = buttonHoverStyle.background;
  };

  const handleMouseOut = (e) => {
    e.target.style.background = buttonStyle.background;
  };
  const onredirect = (item)=>{
    console.log(item);
    router("/detalles/"+item.id);
  }

  return (
    <div style={cardStyle}>
      <img src={item.image} alt={item.name} style={imageStyle} />
      <h2>{item.name}</h2>
      <p>
        <strong>Estado:</strong> {item.status === 'Dead' ? 'Muerto' : 'Vivo'}
      </p>
      <p>
        <strong>Especie:</strong> {item.species}
      </p>
      <p>
        <strong>Género:</strong> {item.gender === 'Male' ? 'Masculino' : 'Femenino'}
      </p>
      <p>
        <strong>Ubicación:</strong> {item.location.name}
      </p>
        <button
        onClick={()=>onredirect(item)}
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Ver Detalles
        </button>

    </div>
  );
};
