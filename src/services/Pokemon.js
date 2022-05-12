export const getPokemonByNameOrId = async (pokemon) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error("Pokemon not found");
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemonByUrl = async (url) => {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    } else {
      throw new Error("Pokemon not found");
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemons = async (limit = 50, offset = 0) => {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemonTypes = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/type`;
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getPokemonByType = async (type) => {
  try {
    const url = `https://pokeapi.co/api/v2/type/${type}`;
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

export const getNationalPokedex = async () => {
  try {
    const url = `https://pokeapi.co/api/v2/pokedex/national/`;
    const response = await fetch(url);
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
