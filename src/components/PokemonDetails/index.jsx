import React, { useEffect, useState } from "react";
import { getPokemonByNameOrId } from "../../services/Pokemon";
import Loader from "../Shared/Loader";
import PokemonImages from "./PokemonImages";
import PokemonLabel from "./PokemonLabel";
import PokemonNavBar from "./PokemonNavBar";
import PokemonStats from "./PokemonStats";

const PokemonDetails = ({ name }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      const pokemonData = await getPokemonByNameOrId(name);
      setPokemon(pokemonData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div>
              <PokemonNavBar
                id={pokemon.id}
                type={pokemon.types[0].type.name}
              />
            </div>
            <div title={pokemon.name}>
              <PokemonImages
                front_default={pokemon.sprites.front_default}
                back_default={pokemon.sprites.back_default}
                type={pokemon.types[0].type.name}
              />
            </div>
            <div>
              <PokemonLabel
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                type2={pokemon.types[1] ? pokemon.types[1].type.name : null}
                height={pokemon.height}
                weight={pokemon.weight}
              />
            </div>
            <div>
              <PokemonStats stats={pokemon.stats} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PokemonDetails;
