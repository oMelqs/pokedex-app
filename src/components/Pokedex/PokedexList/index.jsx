import React, { useEffect, useState } from "react";
import {
  getPokemonByType,
  getPokemonByUrl,
  getPokemons,
  getPokemonTypes,
} from "../../../services/Pokemon";
import Loader from "../../Shared/Loader";
import PokedexPagination from "./PokedexPagination";
import PokedexCard from "../PokedexCard";

import "./style.css";
import PokemonRandomButton from "./PokedexRandomButton";

const PokedexList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("all");
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  //for some reason the return of the total pokemons from the api does not match the number of pokemons I can request
  const [totalPokemons, setTotalPokemons] = useState(0);
  const pokemonsPerPage = 24;
  const totalPages = (totalPokemons / pokemonsPerPage).toFixed(0);

  useEffect(() => {
    if (selectedType !== "all") {
      fetchFilteredByTypesPokemons(selectedType);
    } else {
      fetchPokemons();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType, page]);

  useEffect(() => {
    fetchPokemonTypes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchPokemons = async () => {
    setLoading(true);
    try {
      const pokemonsData = await getPokemons(
        pokemonsPerPage,
        pokemonsPerPage * (page - 1)
      );
      setTotalPokemons(pokemonsData.count);
      const promises = pokemonsData.results.map(async (pokemon) => {
        return await getPokemonByUrl(pokemon.url);
      });

      const pokemons = await Promise.all(promises);
      setPokemons(pokemons);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFilteredByTypesPokemons = async () => {
    setLoading(true);
    try {
      const typeData = await getPokemonByType(selectedType);

      const promises = typeData.pokemon.map(async (pokemonData) => {
        return await getPokemonByUrl(pokemonData.pokemon.url);
      });

      const pokemons = await Promise.all(promises);
      setPokemons(pokemons);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchPokemonTypes = async () => {
    try {
      const pokemonTypesData = await getPokemonTypes();
      setPokemonTypes(pokemonTypesData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectedType = (e) => {
    setSelectedType(e.target.value);
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="controller-container">
            <div className="filter-select-container">
              <select
                id="filter"
                className="filter-select"
                onChange={handleSelectedType}
                defaultValue={selectedType}
              >
                <option value="all">All</option>
                {pokemonTypes.results.map((type) => (
                  <option key={type.name} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="pagination-container">
              {selectedType === "all" ? (
                <PokedexPagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={setPage}
                  onLeftClick={() => setPage(page - 1)}
                  onRightClick={() => setPage(page + 1)}
                />
              ) : (
                <h3>Showing all {selectedType} type pokemons</h3>
              )}
            </div>
            <div className="random-button-container">
              <PokemonRandomButton />
            </div>
          </div>
          <div className="pokemons-container">
            {pokemons.map((pokemon, index) => (
              <div key={pokemon.id}>
                <PokedexCard
                  key={index}
                  id={pokemon.id?.toString()}
                  image={pokemon.sprites.front_default}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PokedexList;
