import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import { bool, func, string } from 'prop-types';
import './componentStyle.css';

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

export { ZoomPictureModal };
