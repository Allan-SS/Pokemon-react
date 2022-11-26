import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Card/Cards";

const List = ({ filterPokemons }) => {
  return (
    <Container>
      <Row>
        {filterPokemons.map((pokemon) => (
          <Col>
            <Cards pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default List;
