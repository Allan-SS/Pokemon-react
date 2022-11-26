import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selected, setSelected] = useState("")

  const states = { pokemonList, searchValue, selected };
  const setters = { setPokemonList, setSearchValue, setSelected };

  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
