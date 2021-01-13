import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { bool, func, string } from 'prop-types';
import './componentsStyle/componentStyle.css';
import { AddMedicalEntryForm } from './forms';

const ZoomPictureModal = ({ shouldCloseZoomModal, imageToShow, shouldModalShow }) => (
  <Modal
    onHide={shouldCloseZoomModal}
    show={shouldModalShow}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Selected Picture
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Image fluid className="zoomImageModal" src={imageToShow} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={shouldCloseZoomModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

ZoomPictureModal.propTypes = {
  shouldCloseZoomModal: func.isRequired,
  imageToShow: string.isRequired,
  shouldModalShow: bool.isRequired
};

// TODO: FINISH form contents pass up to parent.
//  clear out fields. ahsleigh wants drop down for title.
const AddMedicalModal = ({ handleCloseModal, shouldMedicalModalShow, handleModalSubmit }) => (
  <Modal
    onHide={handleCloseModal}
    show={shouldMedicalModalShow}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title>
        Add a New Medical Entry
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <AddMedicalEntryForm />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={handleModalSubmit}>Post</Button>
      <Button className="bg-danger" onClick={handleCloseModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);

AddMedicalModal.propTypes = {
  handleCloseModal: func.isRequired,
  shouldMedicalModalShow: bool.isRequired,
  handleModalSubmit: func.isRequired
};

export { ZoomPictureModal, AddMedicalModal };
