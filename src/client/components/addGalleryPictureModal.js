import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import { AddImageToGalleryForm } from './forms';

export default class AddPictureModal extends React.Component {
  state = {
    imageLocation: ''
  }

  handlePictureLocationSelection = (event) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
    fileReader.onload = () => {
      this.setState({ imageLocation: fileReader.result });
    };
  }

  clearFormField = () => {
    this.setState({ imageLocation: '' });
  }

  handleModalClose = () => {
    this.clearFormField();
    const { handleCloseAddPictureModal } = this.props;
    handleCloseAddPictureModal();
  }

  handleModalSubmit = (imageLocation) => {
    if (!imageLocation) {
      this.handleModalClose();
    } else {
      const { handleSubmitAddPictureModal } = this.props;
      this.clearFormField();
      handleSubmitAddPictureModal(imageLocation);
    }
  }

  render() {
    const {
      shouldShowAddPictureModal
    } = this.props;
    const { imageLocation } = this.state;
    return (
      <Modal show={shouldShowAddPictureModal} onHide={() => this.handleModalClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddImageToGalleryForm handleSelectedImage={this.handlePictureLocationSelection} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => this.handleModalClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleModalSubmit(imageLocation)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddPictureModal.propTypes = {
  shouldShowAddPictureModal: bool.isRequired,
  handleCloseAddPictureModal: func.isRequired,
  handleSubmitAddPictureModal: func.isRequired
};
