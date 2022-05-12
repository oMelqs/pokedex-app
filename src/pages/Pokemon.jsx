import React from "react";
import { useParams } from "react-router-dom";
import PokemonDetails from "../components/PokemonDetails";

const Pokemon = () => {
  const { name } = useParams();
  return (
    <div>
      <PokemonDetails name={name} />
    </div>
  );
};

export default Pokemon;
