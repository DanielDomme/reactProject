import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const WoodworkingForm = () => (
  <Form>
    <Form.Group controlId="formPostTitle">
      <Form.Label>Post Title</Form.Label>
      <Form.Control placeholder="Post Title" />
    </Form.Group>
    <Form.Label>Upload Images</Form.Label>
    <Form.File id="addImageButton" />
  </Form>
);
export default WoodworkingForm;
