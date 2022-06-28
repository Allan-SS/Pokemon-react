import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Cards.scss'

const Cards = ({pokemon}) => {
  return (
      <Card className="Cards">
          <div className="Cards-img">
            <Card.Img variant="top" src={pokemon.img} />
          </div>
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>
            {pokemon.num}
          </Card.Text>
          <Button variant="primary">Ver Mais</Button>
        </Card.Body>
      </Card>
  );
};

export default Cards;
