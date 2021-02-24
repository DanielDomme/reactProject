import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bool, func, instanceOf, number, shape, string } from 'prop-types';
import { AddMedicalEntryForm } from './forms';

export default class AddMedicalModal extends Component {
  constructor(props) {
    super(props);
    const { tableEntry } = this.props;
    console.log(`I forgot where I left off ${tableEntry.entryId === undefined}`);
    if (tableEntry.entryId === undefined) {
      this.state = {
        entryId: '',
        entryType: '',
        date: '',
        performedBy: '',
        cost: '',
        description: ''
      };
    } else {
      this.state = {
        entryId: tableEntry.entryId.toString(),
        entryType: tableEntry.entryType,
        date: tableEntry.date.toString(),
        performedBy: tableEntry.performedBy,
        cost: tableEntry.cost.toString(),
        description: tableEntry.description
      };
    }
  }

  // componentWillMount() {
  //   const { tableEntry } = this.props;
  //   console.log(`I forgot where I left off2. Oh, the dupes! ${tableEntry.entryId === undefined}`);
  //   if (tableEntry.entryId === undefined) {
  //     this.setState({
  //       entryId: '',
  //       entryType: '',
  //       date: '',
  //       performedBy: '',
  //       cost: '',
  //       description: ''
  //     });
  //   } else {
  //     this.setState({
  //       entryId: tableEntry.entryId.toString(),
  //       entryType: tableEntry.entryType,
  //       date: tableEntry.date.toString(),
  //       performedBy: tableEntry.performedBy,
  //       cost: tableEntry.cost.toString(),
  //       description: tableEntry.description
  //     });
  //   }
  // }

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

  clearFields = () => {
    this.setState({
      entryType: '', date: '', performedBy: '', cost: '', description: ''
    });
  }


  // TODO: ADD error handling for dates and cost
  render() {
    const {
      handleCloseModal,
      shouldMedicalModalShow,
      handleModalSubmit,
      submitType,
      medicalModalTitle
    } = this.props;
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
            {medicalModalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMedicalEntryForm
            onEntryTypeChange={event => this.handleEntryTypeInput(event)}
            onDateChange={event => this.handleDateInput(event)}
            onPerformedByChange={event => this.handlePerformedByInput(event)}
            onCostChange={event => this.handleCostInput(event)}
            onDescriptionChange={event => this.handleDescriptionInput(event)}
            startingValues={this.state}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { handleModalSubmit(this.state); this.clearFields(); }}>
            {submitType}
          </Button>
          <Button className="bg-danger" onClick={() => { handleCloseModal(); this.clearFields(); }}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

AddMedicalModal.defaultProps = {
  tableEntry: {
    entryId: null,
    date: null,
    title: '',
    description: '',
    performedBy: '',
    cost: null
  }
};

AddMedicalModal.propTypes = {
  handleCloseModal: func.isRequired,
  shouldMedicalModalShow: bool.isRequired,
  handleModalSubmit: func.isRequired,
  submitType: string.isRequired,
  medicalModalTitle: string.isRequired,
  tableEntry: shape({
    entryId: number,
    date: instanceOf(Date),
    title: string,
    description: string,
    performedBy: string,
    cost: number
  })
};
