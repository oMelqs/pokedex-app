import React from "react";
import "./style.css";

const PokemonNavBar = ({ id, type }) => {
  return (
    <div className={type + " pokemon-nav-bar"}>
      <div>
        <button
          className="pokemonNavBar-button-container"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            alt="Back"
            className="pokemonImage-button-image"
            src="https://cdn-icons-png.flaticon.com/512/126/126492.png"
          />
        </button>
      </div>
      <div>
        <h3 title="Pokemon Id" className="pokemon-nav-bar-id">
          #{id}
        </h3>
      </div>
    </div>
  );
};

export default PokemonNavBar;
