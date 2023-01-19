import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoPsyduck from "../../assets/psyduck.png";
import LogoPokeBall from "../../assets/pokebola.png";
import Form from "react-bootstrap/Form";
import "./Navbar.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";

const NavBar = ({ add }) => {
  const { states, setters } = useContext(GlobalStateContext);

  const navigate = useNavigate();

  const handleClick = () => {
    return navigate("/");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setters.setSearchValue(value);
  };

  const typesPokemon = [
    "Water",
    "Bug",
    "Dragon",
    "Electric",
    "Ghost",
    "Fire",
    "Ice",
    "Fighting",
    "Normal",
    "Grass",
    "Psychic",
    "Rock",
    "Ground",
    "Poison",
    "Flying",
  ];

  return (
    <Navbar className="navBar" expand="lg">
      <Container>
        <Navbar className="navBar__title" onClick={() => handleClick()}>
          {add ? (
            <img alt="psyduck" src={LogoPsyduck} />
          ) : (
            <img alt="pokedex" src={LogoPokeBall} />
          )}
          POKEDEX
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <NavDropdown title="Types of Pokemons" id="types" menuVariant="dark">
              {typesPokemon.map((type, index) => (
                <NavDropdown.Item
                  value={type}
                  onClick={() => {
                    setters.setSelected(type);
                  }}
                  key={index}
                >
                  {type}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Form className="d-flex">
              <Form.Control
                onChange={handleChange}
                value={states.searchValue}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
