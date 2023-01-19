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
        <div className="container-modal">
          <Modal.Header closeButton>
            <div className="container-title">
              <Modal.Title>{props.namePokemon}</Modal.Title>
              <ModalTitle>{props.numPokemon}</ModalTitle>
            </div>
          </Modal.Header>
          <div className="container-img">
            <div>
              <img alt="ImgModal" src={props.imgPokemon} />
            </div>
          </div>
          <Modal.Body>
              <h5 className="descr-details">Type : {props.typePokemon + ''}</h5>
              <h5 className="descr-details">Height : {props.heightPokemon}</h5>
              <h5 className="descr-details">Weight : {props.weightPokemon}</h5>
              <h5 className="descr-details">Weaknesses : {props.weaknessesPokemon + ''}</h5>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetails;
