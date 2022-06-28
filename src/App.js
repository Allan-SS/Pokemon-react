import React, { useState, useEffect } from "react";
import Cards from "./components/Card/Cards";
import {Row, Col, Container} from 'react-bootstrap';
import { getPokemons } from "./services/getPokemon";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleGetPokemons = async () => {
    const res = await getPokemons();
    if (res.error) {
      // TODO: handle error
      console.log(res);
    }
    setPokemonList(res.pokemon);
  };
  console.log(pokemonList);

  useEffect(() => {
    handleGetPokemons();
  }, []);

  return (
    <div>
      <Container>
        PokeDex
        <Row>
          {pokemonList.map((pokemon) => (
            <Col>
              <Cards pokemon={pokemon} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
