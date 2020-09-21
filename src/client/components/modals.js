import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { bool, func } from 'prop-types';
import WoodworkingForm from './forms';
import '../app.css';

export default class WoodworkingPostModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: '',
      bodyContent: ''
    };
  }

  handleImageNameInput = (inputImageName) => {
    this.setState({ imageName: inputImageName });
  }

  handleBodyContentInput = (inputBodyContent) => {
    this.setState({ bodyContent: inputBodyContent });
  }

  render() {
    const { isModalShowing } = this.props;
    const { handleModalCancel, handleModalSubmit } = this.props;
    const { handleImageNameInput, handleBodyContentInput } = this.state;
    return (
      <Modal show={isModalShowing} onHide={handleModalCancel}>
        <Modal.Header closeButton>
          <Modal.Title>
            Add A New Post!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBodyText">
          <WoodworkingForm
            handleUserImageNameInput={handleImageNameInput}
            handleUserBodyInput={handleBodyContentInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalSubmit}>Post</Button>
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
