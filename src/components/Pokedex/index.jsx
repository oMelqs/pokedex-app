import React from "react";
import PokedexList from "./PokedexList";
import SearchBar from "./PokedexSearchBar";
import "./style.css";

const Pokedex = () => {
  return (
    <div>
      <SearchBar />
      <div className="pokemonList-container">
        <PokedexList />
      </div>
    </div>
  );
};

export default Pokedex;
