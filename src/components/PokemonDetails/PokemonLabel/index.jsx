import React from "react";
import "./style.css";

const PokemonLabel = ({ name, type, type2, height, weight }) => {
  return (
    <div>
      <div className="pokemon-label">
        <div className="pokemon-label-name">
          <h1>{name}</h1>
        </div>
        <div className="pokemon-label-type">
          {type2 ? type + " | " : type} {type2}
        </div>
        <div>
          Height: {height} | Weight: {weight}
        </div>
      </div>
    </div>
  );
};

export default PokemonLabel;
