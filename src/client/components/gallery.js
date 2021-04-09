import React from 'react';
import { Card } from 'react-bootstrap';
import { string, arrayOf, shape } from 'prop-types';
import '../app.css';
import { DeleteButton, EditButton } from './buttons';

const ProjectCard = ({ title, imageLocation, body }) => (
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

ProjectCard.defaultProps = {
  title: '',
  body: '',
  imageLocation: ''
};

ProjectCard.propTypes = {
  title: string,
  body: string,
  imageLocation: string
};

const Gallery = ({ galleryArray }) => (
  <div>
    {galleryArray.map((item, i) => (
      <div key={i.toString()} className="d-lg-inline-block woodWorkingPostCards">
        <ProjectCard
          title={item.postTitle}
          imageLocation={item.imageLocation}
          body={item.bodyContent}
        />
      </div>
    ))}
  </div>
);

Gallery.defaultProps = {
  galleryArray: []
};

Gallery.propTypes = {
  galleryArray: arrayOf(shape({
    title: string,
    body: string,
    imageLocation: string
  }))
};

export { ProjectCard, Gallery };
