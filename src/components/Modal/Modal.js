import React from "react";
import { ModalTitle } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./Modal.scss";

const ModalDetails = (props) => {
  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        size="sl"
        centered
      >
        <div className="Modal">
          <Modal.Header closeButton>
            <Modal.Title>{props.namePokemon}</Modal.Title>
            <ModalTitle>{props.numPokemon}</ModalTitle>
          </Modal.Header>
          <div className="ContainerImg">
            <div className="imgModal">
              <img alt="ImgModal" src={props.imgPokemon} />
            </div>
          </div>
          <Modal.Body>
            <h5 className="descriptionModal">Type : {props.typePokemon}</h5>
            <h5 className="descriptionModal">Height : {props.heightPokemon}</h5>
            <h5 className="descriptionModal">Weight : {props.weightPokemon}</h5>
            <h5 className="descriptionModal">Weaknesses : {props.weaknessesPokemon}</h5>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetails;
