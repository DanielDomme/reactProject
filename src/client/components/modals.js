import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import '../app.css';

export default class WoodworkingPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle: '',
      imageLocation: '',
      bodyContent: ''
    };
  }

  handlePostTitleInput = (event) => {
    this.setState({ postTitle: event.target.value });
  }

  // TODO: Multer and Save to File System or other DB(MONGO)
  // TODO: Refactor Submit/Cancel Buttons and Zeroize Form Fields, Handle Empty Fields
  handleLocationNameInput = (event) => {
    console.log(`file ${event.target.files[0]}`);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onerror = () => {
      console.log(fileReader.error);
    };
    fileReader.onload = () => {
      this.setState({ imageLocation: fileReader.result });
    };
  }

  handleBodyContentInput = (event) => {
    this.setState({ bodyContent: event.target.value });
  }

  handleSubmit = (bodyContent) => {
    this.prop.handleModalSubmit(bodyContent);
  }

  render() {
    const { isModalShowing } = this.props;
    const { handleModalCancel, handleModalSubmit } = this.props;
    // const {
    //   postTitle, bodyContent, imageLocation
    // } = this.state;
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
              <Form.Control placeholder="Post Title" required onChange={event => this.handlePostTitleInput(event)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Post Body Information</Form.Label>
              <Form.Control as="textarea" required onChange={event => this.handleBodyContentInput(event)} />
            </Form.Group>
            <Form.Label>Upload Images</Form.Label>
            <Form.File.Input id="addImageButton" onChange={event => this.handleLocationNameInput(event)} />
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
