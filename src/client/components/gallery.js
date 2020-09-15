import React from 'react';
import { Card } from 'react-bootstrap';
import { string } from 'prop-types';

const Gallery = ({ title, imageLocation }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
    </Card.Body>
    <Card.Img src={imageLocation} />
  </Card>
);

Gallery.defaultProps = {
  title: '',
  imageLocation: ''
};

Gallery.propTypes = {
  title: string,
  imageLocation: string
};
export default Gallery;
