import React from "react";
import { getNationalPokedex } from "../../../../services/Pokemon";
import "./style.css";

const PokemonRandomButton = () => {
  const handleClick = async () => {
    const nationalPokedex = await getNationalPokedex();
    const randomNumber =
      Math.floor(Math.random() * nationalPokedex.pokemon_entries.length) + 1;
    window.location.href = `/${randomNumber}`;
  };
  return (
    <button onClick={handleClick} title="Random" className="random-button">
      <img
        alt="Random"
        className="random-button-image"
        src="https://cdn-icons-png.flaticon.com/512/126/126487.png"
      />
    </button>
  );
};

export default PokemonRandomButton;
