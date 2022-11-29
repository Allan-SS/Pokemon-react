import React, { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import List from "../../components/List/List";
import GlobalStateContext from "../../global/GlobalStateContext";
import ButtonDex from "../../components/PokeDexBtn/ButtonDex";

const PokeDexPage = () => {
    const { states } = useContext(GlobalStateContext);


    return(
        <div>  
            <NavBar/>
            <List filterPokemons={states.pokedexList}/>
            <ButtonDex path="/" message="Home" />
        </div>
    );
};

export default PokeDexPage;