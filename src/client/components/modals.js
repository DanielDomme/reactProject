import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import '../app.css';

export default class WoodworkingPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: '',
      bodyContent: ''
    };
    this.handleImageNameInput = this.handleImageNameInput.bind(this);
  }

  handleImageNameInput = (event) => {
    this.setState({ imageName: event.target.value });
  }

  handleBodyContentInput = (event) => {
    console.log(event.target.value);
    this.setState({ bodyContent: event.target.value });
  }

  handleSubmit = (bodyContent) => {
    console.log(`help ${bodyContent}`);
    this.prop.handleModalSubmit(bodyContent);
  }

  render() {
    const { isModalShowing } = this.props;
    const { handleModalCancel, handleModalSubmit } = this.props;
    const {
      handleImageNameInput, handleBodyContentInput, handleSubmit, bodyContent, imageName
    } = this.state;
    return (
      <Modal show={isModalShowing} onHide={handleModalCancel}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add A New Post!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyText">
          {/* <WoodworkingForm */}
          {/*  handleUserImageNameInput={handleImageNameInput} */}
          {/*  handleUserBodyInput={handleBodyContentInput} */}
          {/* /> */}
          <Form>
            <Form.Group controlId="formPostTitle">
              <Form.Label>Post Title</Form.Label>
              <Form.Control placeholder="Post Title" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Post Body Information</Form.Label>
              <Form.Control as="textarea" onChange={event => this.handleBodyContentInput(event)} />
            </Form.Group>
            <Form.Label>Upload Images</Form.Label>
            <Form.File id="addImageButton" />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleModalSubmit(this.state)}>Post</Button>
          <Button className="bg-danger" onClick={handleModalCancel}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

WoodworkingPostModal.propTypes = {
  isModalShowing: bool.isRequired,
  handleModalCancel: func.isRequired,
  handleModalSubmit: func.isRequired
};
// export default WoodworkingPostModal;
