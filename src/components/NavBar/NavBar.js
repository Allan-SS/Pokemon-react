import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LogoPsyduck from "../../assets/psyduck.png";
import Form from "react-bootstrap/Form";
import "./Navbar.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";

const NavBar = () => {
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
    <Navbar className="NavBar" expand="lg">
      <Container>
        <Navbar.Brand className="Title" onClick={() => handleClick()}>
          <img alt="psyduck" src={LogoPsyduck} width="50" height="50" />
          POKEDEX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Types of Pokemons" id="basic-nav-dropdown">
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
