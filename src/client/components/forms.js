import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { func } from 'prop-types';

const WoodworkingForm = ({ handleUserImageNameInput, handleUserBodyInput }) => (
  <Form>
    <Form.Group controlId="formPostTitle">
      <Form.Label>Post Title</Form.Label>
      <Form.Control placeholder="Post Title" />
    </Form.Group>
    <Form.Group>
      <Form.Label>Post Body Information</Form.Label>
      <Form.Control as="textarea" />
    </Form.Group>
    <Form.Label>Upload Images</Form.Label>
    <Form.File id="addImageButton" />
  </Form>
);
WoodworkingForm.protoTypes = {
  handleUserImageNameInput: func.isRequired,
  handleUserBodyInput: func.isRequired
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

const AddMedicalEntryForm = () => (
  <Form>
    <Row>
      <Col>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select">
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
        <Form.Control placeholder="MM/DD/YYYY" />
      </Col>
    </Row>
    <Row>
      <Col>
        <Form.Label>Performed By</Form.Label>
        <Form.Control placeholder="Performed By" />
      </Col>
      <Col>
        <Form.Label>Cost</Form.Label>
        <Form.Control placeholder="Cost" />
      </Col>
    </Row>
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" placeholder="Description..." />
  </Form>
);
export { WoodworkingForm, AddImageToGalleryForm, AddMedicalEntryForm };
