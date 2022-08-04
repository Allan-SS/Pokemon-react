import React from "react";
import Modal from "react-bootstrap/Modal";
import Avatar from "../../assets/avatar.png"

const ModalError = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
        <Modal.Title>ERROR</Modal.Title>
      </Modal.Header>
        <div className="Cards-img">
          <img alt="ImgModal" src={Avatar} />
        </div>
      </Modal>
    </div>
  );
};

export default ModalError;
