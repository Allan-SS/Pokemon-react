import React, { useEffect, useContext } from "react";
import { getPokemons } from "../../services/getPokemon";
import NavBar from "../../components/NavBar/NavBar";
import ModalError from "../../components/Modal/Modal";
import GlobalStateContext from "../../global/GlobalStateContext";
import List from "../../components/List/List";
import ButtonDex from "../../components/PokeDexBtn/ButtonDex";

const HomePage = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const pokeList = states.pokemonList;
  const lowerSearch = states.searchValue.toLowerCase();

  const handleGetPokemons = async () => {
    const res = await getPokemons();
    if (res.error) {
      <ModalError />;
    }
    setters.setPokemonList(res.pokemon);
  };

  const handlePokemon = () => {
    if (states.searchValue) {
      return pokeList.filter((list) =>
        list.name.toLowerCase().includes(lowerSearch)
      );
    } else if (states.selected) {
      return pokeList.filter((listType) =>
        listType.type.includes(states.selected)
      );
    } else {
      return pokeList;
    }
  };



  useEffect(() => {
    handleGetPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <List filterPokemons={handlePokemon()} add />
      <ButtonDex path="/pokedex" message="PokéDex" />
    </div>
  );
};

export default HomePage;
