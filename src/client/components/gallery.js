import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { string } from 'prop-types';
import trashCan from '../../resources/trashCan.png';
import '../app.css';

const Gallery = ({ title, imageLocation, body }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card.Body>
    <Card.Img src={imageLocation} />
    <Card.Footer>
      <Button variant="outline-dark" className="noBorder">
        <img className="deleteButton" src={trashCan} alt="Delete Button" />
      </Button>
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
