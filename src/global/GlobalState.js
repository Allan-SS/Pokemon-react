import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState("")
  const [pokedexList, setPokedexList] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [showTooltip, setShowTooltip] = useState(false)

  const states = { pokemonList, searchValue, selected, pokedexList, pokedex, showTooltip };
  const setters = { setPokemonList, setSearchValue, setSelected, setPokedexList, setPokedex, setShowTooltip };

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
