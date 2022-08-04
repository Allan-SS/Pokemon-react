import React from "react";
import { ModalTitle } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDetails = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.namePokemon}</Modal.Title>
          <ModalTitle>{props.numPokemon}</ModalTitle>
        </Modal.Header>
        <div className="Cards-img">
          <img alt="ImgModal" src={props.imgPokemon} />
        </div>
        <Modal.Body>
          <h5>Type : {props.typePokemon}</h5>
          <h5>Height : {props.heightPokemon}</h5>
          <h5>Weight : {props.weightPokemon}</h5>
          <h5>Weaknesses : {props.weaknessesPokemon}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDetails;
