import React, { Component } from 'react';
import {
  Button, Modal,
} from 'react-bootstrap';
import {
  bool, func, instanceOf, number, shape, string
} from 'prop-types';
import { fullStringDateToShortDate, isDateValid } from '../../utils/DateUtils';
import isRealNumber from '../../utils/NumberUtils';
import { AddMedicalEntryForm } from './forms';
import './componentsStyle/componentStyle.css';


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
        description: '',
        isDate: true,
        isCostValid: true,
      };
    } else {
      this.state = {
        entryId: tableEntry.entryId.toString(),
        type: tableEntry.type,
        date: fullStringDateToShortDate(tableEntry.date.toString()),
        performedBy: tableEntry.performedBy,
        cost: tableEntry.cost.toString(),
        description: tableEntry.description,
        isDate: true,
        isCostValid: true,
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
  // TODO: Possibly not needed, clearing handled by parent
  // clearFields = () => {
  //   const { date } = this.state;
  //
  //   if (isDateValid(date)) {
  //     this.setState({
  //       type: '',
  //       date: '',
  //       performedBy: '',
  //       cost: '',
  //       description: ''
  //     });
  //   }
  // }

  validateDateAndCost = () => {
    const { date, cost } = this.state;
    this.setState({ isDate: isDateValid(date), isCostValid: isRealNumber(cost) });
  }

  prepDataForSubmission = () => {
    const {
      entryId, type, date, performedBy, cost, description
    } = this.state;
    const {
      handleModalSubmit
    } = this.props;
    this.validateDateAndCost();
    if (isDateValid(date) && isRealNumber(cost)) {
      handleModalSubmit({
        entryId: Number(entryId),
        type,
        date: new Date(date),
        performedBy,
        cost: Number(cost),
        description
      });
    }
  }

  // TODO: Refactor form out of modal
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
      description,
      isDate,
      isCostValid,
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
          <AddMedicalEntryForm
            type={type}
            handleEntryTypeInput={this.handleEntryTypeInput}
            isDate={isDate}
            handleDateInput={this.handleDateInput}
            date={date}
            handlePerformedByInput={this.handlePerformedByInput}
            performedBy={performedBy}
            isCostValid={isCostValid}
            handleCostInput={this.handleCostInput}
            cost={cost}
            handleDescriptionInput={this.handleDescriptionInput}
            description={description}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => { this.prepDataForSubmission(); }}>
            {submitType}
          </Button>
          <Button className="bg-danger" onClick={() => { handleCloseModal(); }}>
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
