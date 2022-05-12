import React from "react";
import "./style.css";

const PokedexCard = ({ id, image, name, type, type2 }) => {
  const handleClickCard = () => {
    window.location.href = `/${id}`;
  };

  return (
    <button title={name} className="card-button" onClick={handleClickCard}>
      <div className={type + " card-container"}>
        <div>
          <h3>#0{id}</h3>
        </div>
        <img className="card-image" src={image} alt={name} />
        <div>
          <h2>{name}</h2>
          <small>
            {type2 ? type + ", " : type} {type2}
          </small>
        </div>
      </div>
    </button>
  );
};

export default PokedexCard;
