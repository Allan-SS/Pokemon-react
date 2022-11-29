import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
import ModalDetails from "../Modal/Modal";

import GlobalStateContext from "../../global/GlobalStateContext";
import CaptureBtn from "../CaptureBtn/CaptureBtn";

const Cards = ({ pokemon, add }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const { states, setters } = useContext(GlobalStateContext);

  const handleClick = (pokemon) => {
    const pokedexList = JSON.parse(JSON.stringify(states.pokedexList));
    pokedexList.push(pokemon);
    setters.setPokedexList(pokedexList);
  };

  const deletePokemon = (pokemonName) => {
    const pokedexList = states.pokedexList.filter(
      (pokemon) => pokemon.name !== pokemonName
    );
    setters.setPokedexList(pokedexList);
  };

  return (
    <Card className="Cards">
      <div className="Cards-img" onClick={() => setModalShow(!modalShow)}>
        <Card.Img variant="top" src={pokemon.img} />
      </div>
      <Card.Body>
        <Card.Text className="NumPokemon">Nº {pokemon.num}</Card.Text>
        <Card.Title>{pokemon.name}</Card.Title>
        {add ? (
          <CaptureBtn onClick={() => handleClick(pokemon)} />
        ) : (
          <button
            onClick={() => deletePokemon(pokemon.name)}
            className="Button"
          >
            X
          </button>
        )}
        <ModalDetails
          show={modalShow}
          onHide={() => setModalShow(false)}
          imgPokemon={pokemon.img}
          namePokemon={pokemon.name}
          numPokemon={pokemon.num}
          typePokemon={pokemon.type}
          heightPokemon={pokemon.height}
          weightPokemon={pokemon.weight}
          weaknessesPokemon={pokemon.weaknesses}
        />
      </Card.Body>
    </Card>
  );
};

export default Cards;
