import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Card/Cards";
import "./List.scss"

const List = ({ filterPokemons, add }) => {
  return (
    <Container id="Container">
      <Row>
        {filterPokemons.map((pokemon, index) => (
          <Col key={index}>
            <Cards pokemon={pokemon} add={add}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;