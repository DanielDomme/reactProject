import React, { Component } from 'react';
import {
  Button, Col, Form, Modal, Row
} from 'react-bootstrap';
import {
  bool, func, instanceOf, number, shape, string
} from 'prop-types';
import fullStringDateToShortDate from '../../utils/DateUtils';
import { AddMedicalEntryForm } from './forms';

export default class AddMedicalModal extends Component {
  constructor(props) {
    super(props);
    const { tableEntry } = this.props;
    if (tableEntry.entryId === undefined) {
      this.state = {
        entryId: '',
        type: '',
        date: '',
        performedBy: '',
        cost: '',
        description: ''
      };
    } else {
      this.state = {
        entryId: tableEntry.entryId.toString(),
        type: tableEntry.type,
        date: fullStringDateToShortDate(tableEntry.date.toString()),
        performedBy: tableEntry.performedBy,
        cost: tableEntry.cost.toString(),
        description: tableEntry.description
      };
    }
  }

  handleEntryTypeInput = (event) => {
    this.setState({ type: event.target.value });
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
      type: '', date: '', performedBy: '', cost: '', description: ''
    });
  }

  prepDataForSubmission = () => {
    const {
      entryId, type, date, performedBy, cost, description
    } = this.state;
    const {
      handleModalSubmit
    } = this.props;
    handleModalSubmit({
      entryId: Number(entryId),
      type,
      date: new Date(date),
      performedBy,
      cost: Number(cost),
      description
    });
  }

  // TODO: Refactor form out of modal
  // TODO: ADD error handling for dates and cost
  render() {
    const {
      handleCloseModal,
      shouldMedicalModalShow,
      submitType,
      medicalModalTitle
    } = this.props;
    const {
      type,
      date,
      performedBy,
      cost,
      description
    } = this.state;
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
          {/* <AddMedicalEntryForm */}
          {/*  onEntryTypeChange={event => this.handleEntryTypeInput(event)} */}
          {/*  onDateChange={event => this.handleDateInput(event)} */}
          {/*  onPerformedByChange={event => this.handlePerformedByInput(event)} */}
          {/*  onCostChange={event => this.handleCostInput(event)} */}
          {/*  onDescriptionChange={event => this.handleDescriptionInput(event)} */}
          {/*  startingValues={this.state} */}
          {/* /> */}
          <Form>
            <Row>
              <Col>
                <Form.Label>Entry Type</Form.Label>
                <Form.Control as="select" value={type} onChange={this.handleEntryTypeInput}>
                  {/* TODO: refactor options and make customizable */}
                  <option disabled />
                  <option value="Surgery">Surgery</option>
                  <option value="Grooming">Grooming</option>
                  <option value="Medication">Medication</option>
                  <option value="Doctor's Visit">{'Doctor\'s Visit'}</option>
                  <option value="Weight">Weight</option>
                  <option value="Add Option">Add Option</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Label>Date (MM/DD/YYYY)</Form.Label>
                <Form.Control placeholder="Date" onChange={this.handleDateInput} value={date} />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Performed By</Form.Label>
                <Form.Control placeholder="Performed By" onChange={this.handlePerformedByInput} value={performedBy} />
              </Col>
              <Col>
                <Form.Label>Cost</Form.Label>
                <Form.Control placeholder="Cost" onChange={this.handleCostInput} value={cost} />
              </Col>
            </Row>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description..." onChange={this.handleDescriptionInput} value={description} />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { this.prepDataForSubmission(); this.clearFields(); }}>
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
    type: '',
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
    type: string,
    date: instanceOf(Date),
    title: string,
    description: string,
    performedBy: string,
    cost: number
  })
};
