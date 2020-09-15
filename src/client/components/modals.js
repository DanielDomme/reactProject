import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { bool, func } from 'prop-types';

const WoodworkingPostModal = ({ isModalShowing, toggleModalVisibility }) => (
  <Modal show={isModalShowing} onHide={toggleModalVisibility}>
    <Modal.Header closeButton>
      <Modal.Title>
        Add A New Post!
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h1>
        This is the body for stuff!
      </h1>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={toggleModalVisibility}>Post</Button>
      <Button className="bg-danger" onClick={toggleModalVisibility}>Close</Button>
    </Modal.Footer>
  </Modal>
);

WoodworkingPostModal.propTypes = {
  isModalShowing: bool.isRequired,
  toggleModalVisibility: func.isRequired
};
export default WoodworkingPostModal;
