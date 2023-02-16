import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import { GlobalContext } from "./GlobalContext";

//Aqui e onde fica todos os estados globais, onde posso passa todos os estados para pages e components.

const GlobalState = ({children}) => {
  const [pokedex, setPokedex] = useState([]);
  const [pokelist, setPokelist] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [flow, setFlow] = useState(1);
  const [numbMin, setNumbMin] = useState(0);
  const [perPage, setPerPage] = useState(20);
  const [lastPage, setLastPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [pokelistFilter, setPokelistFilter] = useState([]);

  //aqui e feita as requisições da API pokemons.
  const fetchPokelist = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}?offset=${numbMin}&limit=${perPage}`
      );
      setLastPage(Math.ceil(response.data.count / perPage));
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemon");
      console.log(error.response);
    }
  };

  const filterPokemon = (pokeName) => {
    const pokeFilter = pokelist.filter((pokemon) => pokemon.name !== pokeName);
    setPokelist(pokeFilter);
  };

  const addToPokedex = (pokemonAdd) => {
    const filterPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonAdd.name
    );
    if (!filterPokedex) {
      const newPokedex = [...pokedex, pokemonAdd];
      const pokedexStringify = JSON.stringify(newPokedex);
      localStorage.setItem("pokedex", pokedexStringify);
      setPokedex(newPokedex);
    }
    
    // const pokeFilter = pokelist.filter((pokemon) => pokemon.name !== pokemonAdd.name);
    // setPokelist(pokeFilter)
  };

  const removeToPokedex = (pokemonRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonRemove.name
    );

    setPokedex(newPokedex);
    const newPokelist = [...pokelist];

    const pokedexStringify = JSON.stringify(newPokedex)
    localStorage.setItem("pokedex", pokedexStringify)

    setPokelist(newPokelist);
  };

  useEffect(() => {
    const getPokemonLocalStorage = localStorage.getItem("pokedex");
    if (getPokemonLocalStorage) {
      const pokemonArray = JSON.parse(getPokemonLocalStorage);
      setPokedex(pokemonArray);
    }
      fetchPokelist();
  }, [pageNumber]);

  const context = {
    fetchPokelist,
    pokelist,
    setPokelist,
    pokedex,
    setPokedex,
    isOpen,
    setIsOpen,
    flow,
    setFlow,
    setLastPage,
    lastPage,
    setPerPage,
    perPage,
    setNumbMin,
    numbMin,
    setPageNumber,
    pageNumber,
    filterPokemon,
    addToPokedex,
    removeToPokedex,
    pokelistFilter,
    setPokelistFilter,
  };

  return (
    
      <GlobalContext.Provider value={context}>
        {children}
      </GlobalContext.Provider>
    
  );
};

export default GlobalState;
