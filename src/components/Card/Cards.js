import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Cards.scss";
import ModalDetails from "../Modal/Modal";

const Cards = ({ pokemon }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Card className="Cards">
      <div className="Cards-img">
        <Card.Img variant="top" src={pokemon.img} />
      </div>
      <Card.Body>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>{pokemon.num}</Card.Text>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Ver Mais
        </Button>
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
