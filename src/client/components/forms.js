import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { func, } from 'prop-types';
import * as PropTypes from 'prop-types';

const WoodProjectForm = ({ onTitleChange, onBodyChange, onPicLocationChange }) => (
  <Form>
    <Form.Group controlId="formPostTitle">
      <Form.Label>Post Title</Form.Label>
      <Form.Control placeholder="Post Title" required onChange={onTitleChange} />
    </Form.Group>
    <Form.Group>
      <Form.Label>Post Body Information</Form.Label>
      <Form.Control as="textarea" required onChange={onBodyChange} />
    </Form.Group>
    <Form.Label>Upload Images</Form.Label>
    <Form.File.Input id="addImageButton" onChange={onPicLocationChange} />
  </Form>
);

WoodProjectForm.propTypes = {
  onTitleChange: PropTypes.func.isRequired,
  onBodyChange: PropTypes.func.isRequired,
  onPicLocationChange: PropTypes.func.isRequired
};


const AddImageToGalleryForm = ({ handleSelectedImage }) => (
  <Form>
    <Form.Label>Select Image</Form.Label>
    <Form.File.Input id="addImageButton" onChange={event => handleSelectedImage(event)} />
  </Form>
);
AddImageToGalleryForm.propTypes = {
  handleSelectedImage: func.isRequired
};


const AddMedicalEntryForm = ({
  type,
  date,
  performedBy,
  cost,
  description,
  isDate,
  isCostValid,
  handleEntryTypeInput,
  handleDateInput,
  handlePerformedByInput,
  handleCostInput,
  handleDescriptionInput
}) => (
  <Form>
    <Row>
      <Col>
        <Form.Label>Entry Type</Form.Label>
        <Form.Control as="select" value={type} onChange={handleEntryTypeInput}>
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
        {isDate ? null
          : <Form.Text className="form-warning">* Date Must Be a Real Date</Form.Text>}
        <Form.Control placeholder="Date" onChange={handleDateInput} value={date} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Label>Performed By</Form.Label>
        <Form.Control placeholder="Performed By" onChange={handlePerformedByInput} value={performedBy} />
      </Col>
      <Col>
        <Form.Label>Cost</Form.Label>
        {isCostValid ? null
          : <Form.Text className="form-warning">* Cost Should Be A Number</Form.Text>}
        <Form.Control placeholder="Cost" onChange={handleCostInput} value={cost} />
      </Col>
    </Row>
    <Form.Label>Description</Form.Label>
    <Form.Control
      as="textarea"
      placeholder="Description..."
      onChange={handleDescriptionInput}
      value={description}
    />
  </Form>
);

AddMedicalEntryForm.propTypes = {
  type: PropTypes.string.isRequired,
  handleEntryTypeInput: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  handleDateInput: PropTypes.func.isRequired,
  cost: PropTypes.string.isRequired,
  handleCostInput: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
  handleDescriptionInput: PropTypes.func.isRequired,
  performedBy: PropTypes.string.isRequired,
  handlePerformedByInput: PropTypes.func.isRequired,
  isDate: PropTypes.bool.isRequired,
  isCostValid: PropTypes.bool.isRequired,
};

export {
  WoodProjectForm, AddImageToGalleryForm, AddMedicalEntryForm
};
