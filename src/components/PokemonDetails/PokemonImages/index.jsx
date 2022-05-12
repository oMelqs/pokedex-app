import React, { useState } from "react";
import "./style.css";

const PokemonImages = ({ front_default, back_default, type }) => {
  const [front, setFront] = useState(true);

  return (
    <div>
      <div className={type + " pokemonHeader-container"}>
        <div className="pokemonImage-container-front">
          <button
            title="front"
            className="pokemonImage-container-button"
            onClick={() => {
              setFront(!front);
            }}
          >
            <img
              alt="Left"
              className="pokemonImage-button-image"
              src="https://cdn-icons-png.flaticon.com/512/126/126492.png"
            />
          </button>
        </div>
        <div className="pokemonImage-container">
          {front ? (
            <img className="pokemonImage" src={front_default} alt="Pokemon" />
          ) : (
            <img className="pokemonImage" src={back_default} alt="Pokemon" />
          )}
        </div>
        <div className="pokemonImage-container-back">
          <button
            title="back"
            className="pokemonImage-container-button"
            onClick={() => {
              setFront(!front);
            }}
          >
            <img
              alt="Right"
              className="pokemonImage-button-image"
              src="https://cdn-icons-png.flaticon.com/512/126/126490.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonImages;
