import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import { AddMedicalEntryForm } from './forms';

export default class AddMedicalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryType: '',
      date: '',
      performedBy: '',
      cost: '',
      description: ''
    };
  }

  handleEntryTypeInput = (event) => {
    this.setState({ entryType: event.target.value });
  }

  handleDateInput = (event) => {
    this.setState({ date: event.target.value });
  }

  handlePerformedByInput = (event) => {
    this.setState({ performedBy: event.target.value });
  }

  handleCostInput = (event) => {
    this.setState({ cost: event.target.value });
  }

  handleDescriptionInput = (event) => {
    this.setState({ description: event.target.value });
  }


  // TODO: ADD error handling for dates and cost
  render() {
    const { handleCloseModal, shouldMedicalModalShow, handleModalSubmit } = this.props;
    return (
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
          <AddMedicalEntryForm
            onEntryTypeChange={event => this.handleEntryTypeInput(event)}
            onDateChange={event => this.handleDateInput(event)}
            onPerformedByChange={event => this.handlePerformedByInput(event)}
            onCostChange={event => this.handleCostInput(event)}
            onDescriptionChange={event => this.handleDescriptionInput(event)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModalSubmit(this.state)}>Post</Button>
          <Button className="bg-danger" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddMedicalModal.propTypes = {
  handleCloseModal: func.isRequired,
  shouldMedicalModalShow: bool.isRequired,
  handleModalSubmit: func.isRequired
};
