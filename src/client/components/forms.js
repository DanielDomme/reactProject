import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { func } from 'prop-types';
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
  onEntryTypeChange, onDateChange, onPerformedByChange, onCostChange, onDescriptionChange
}) => (
  <Form>
    <Row>
      <Col>
        <Form.Label>Entry Type</Form.Label>
        <Form.Control as="select" onChange={onEntryTypeChange}>
          {/* TODO: refactor options and make customizable */}
          <option />
          <option>Surgery</option>
          <option>Grooming</option>
          <option>Medication</option>
          <option>{'Doctor\'s Visit'}</option>
          <option>Weight</option>
          <option>Add Option</option>
        </Form.Control>
      </Col>
      <Col>
        <Form.Label>Date</Form.Label>
        <Form.Control placeholder="MM/DD/YYYY" onChange={onDateChange} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Label>Performed By</Form.Label>
        <Form.Control placeholder="Performed By" onChange={onPerformedByChange} />
      </Col>
      <Col>
        <Form.Label>Cost</Form.Label>
        <Form.Control placeholder="Cost" onChange={onCostChange} />
      </Col>
    </Row>
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" placeholder="Description..." onChange={onDescriptionChange} />
  </Form>
);

AddMedicalEntryForm.propTypes = {
  onEntryTypeChange: func.isRequired,
  onDateChange: func.isRequired,
  onPerformedByChange: func.isRequired,
  onCostChange: func.isRequired,
  onDescriptionChange: func.isRequired
};

export { WoodProjectForm, AddImageToGalleryForm, AddMedicalEntryForm };
