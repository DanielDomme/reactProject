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
WoodworkingForm.defaultProps = {
  handleUserBodyInput: () => {},
  handleUserImageNameInput: () => {}
};
WoodworkingForm.protoTypes = {
  handleUserImageNameInput: func.isRequired,
  handleUserBodyInput: func.isRequired
};
export default WoodworkingForm;
