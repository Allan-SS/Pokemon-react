import React from "react";
import { Button } from "react-bootstrap";
import { getPokemons } from "./services/getPokemon";


const App = () => {
  const callApi = async () => {
   const res = await getPokemons();
   console.log(res);
  }

  return (
    <div>
      Hello World
      <Button variant="primary" onClick={callApi}>Primary</Button>
    </div>
  );
}

export default App;
