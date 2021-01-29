import React from 'react';
import { Card } from 'react-bootstrap';
import { string } from 'prop-types';
import '../app.css';
import { DeleteButton, EditButton } from './buttons';

const Gallery = ({ title, imageLocation, body }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Header>
      <Card.Title>{title}</Card.Title>
    </Card.Header>
    <Card.Img src={imageLocation} />
    <Card.Body className="cardScroll">
      <Card.Text>{body}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <DeleteButton onDeleteClick={null} />
      <EditButton onEditClick={null} />
    </Card.Footer>
  </Card>
);

Gallery.defaultProps = {
  title: '',
  body: '',
  imageLocation: ''
};

Gallery.propTypes = {
  title: string,
  body: string,
  imageLocation: string
};
export default Gallery;
