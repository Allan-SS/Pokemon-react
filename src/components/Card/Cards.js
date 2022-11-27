import React from "react";
import Card from "react-bootstrap/Card";
import Pokebola from "../../assets/pokebola.png";
import "./Cards.scss";
import ModalDetails from "../Modal/Modal";

const Cards = ({ pokemon }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className="Cards" onClick={() => setModalShow(!modalShow)}>
      <div className="Cards-img">
        <Card.Img variant="top" src={pokemon.img} />
      </div>
      <Card.Body>
        <Card.Text className="NumPokemon">Nº {pokemon.num}</Card.Text>
        <Card.Title>{pokemon.name}</Card.Title>
        <button className="Button">
          <img src={Pokebola} alt={"IconButton"} />
        </button>
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
