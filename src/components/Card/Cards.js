import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./Cards.scss";
import ModalDetails from "../Modal/Modal";

import GlobalStateContext from "../../global/GlobalStateContext";
import CaptureBtn from "../CaptureBtn/CaptureBtn";
import DeleteBtn from "../../assets/Group 28.png";

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
    <Card className="cards">
      <div className="container-img-card">
        <div className="container-img-card__img" onClick={() => setModalShow(!modalShow)}>
          <Card.Img variant="top" src={pokemon.img} />
        </div>
      </div>
      <Card.Body>
        <div className="container-detail">
          <Card.Text className="container-detail__detail">Nº {pokemon.num}</Card.Text>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text className="container-detail__detail">{pokemon.type + ""}</Card.Text>
        </div>
        {add ? (
          <CaptureBtn onClick={() => handleClick(pokemon)} />
        ) : (
          <button
            onClick={() => deletePokemon(pokemon.name)}
            className="Button"
          >
            <img src={DeleteBtn} alt="Btn_delete" />
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
