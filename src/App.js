import React from "react";
import GlobalState from "./global/GlobalState";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokeDexPage from "./pages/PokeDexPage/PokeDexPage";

const App = () => {

  return (
    <div>
      <GlobalState>
        <BrowserRouter className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pokedex" element={<PokeDexPage />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </div>
  );
};

export default App;
