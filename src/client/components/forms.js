import React from 'react';
import { Form } from 'react-bootstrap';
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
    <Form.Label>Date</Form.Label>
    <Form.Control placeholder="Date" />
    <Form.Label>Title</Form.Label>
    <Form.Control placeholder="Title" />
    <Form.Label>Description</Form.Label>
    <Form.Control as="textarea" placeholder="Description..." />
    <Form.Label>Performed By</Form.Label>
    <Form.Control placeholder="Performed By" />
    <Form.Label>Cost</Form.Label>
    <Form.Control placeholder="Cost" />
  </Form>
);
export { WoodworkingForm, AddImageToGalleryForm, AddMedicalEntryForm };
