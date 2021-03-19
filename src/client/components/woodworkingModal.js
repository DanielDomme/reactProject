import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import '../app.css';
import { WoodProjectForm } from './forms';

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
    const { handleModalSubmit } = this.props;
    this.clearFormFields();
    handleModalSubmit(bodyContent);
  }

  handleCancel = () => {
    this.clearFormFields();
    const { handleModalCancel } = this.props;
    handleModalCancel();
  }

  clearFormFields = () => {
    this.setState({ bodyContent: '', postTitle: '', imageLocation: '' });
  }

  render() {
    const { isModalShowing } = this.props;
    return (
      <Modal show={isModalShowing} onHide={this.handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add A New Post!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyText">
          <WoodProjectForm
            onTitleChange={event => this.handlePostTitleInput(event)}
            onBodyChange={event => this.handleBodyContentInput(event)}
            onPicLocationChange={event => this.handleLocationNameInput(event)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.handleSubmit(this.state)}>Post</Button>
          <Button className="bg-danger" onClick={() => this.handleCancel()}>Close</Button>
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
