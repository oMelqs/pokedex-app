import React, { useState } from "react";
import { getPokemonByNameOrId } from "../../../services/Pokemon";
import "./style.css";

const SearchBar = () => {
  const [pokemon, setPokemon] = useState(null);

  const onChangeHandler = async (e) => {
    const { value } = e.target;
    if (value.length > 0) {
      const responsePokemon = await getPokemonByNameOrId(value);
      if (responsePokemon) {
        setPokemon(responsePokemon);
      } else {
        setPokemon(null);
      }
    } else {
      setPokemon(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pokemon) {
      window.location.href = `/${pokemon.id}`;
    } else {
      alert("Pokemon not found");
    }
  };

  return (
    <div className="searchbar-container">
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          className={pokemon ? "searchbar-input" : "searchbar-input-error"}
          placeholder="Search pokemon by name or PokeDex number"
          onChange={onChangeHandler}
        />
        <div className="searchbar-button">
          <button title="search" onClick={handleSubmit}>
            <img
              alt="Ok"
              className="searchbar-button-image"
              src="https://cdn-icons-png.flaticon.com/512/126/126474.png"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
