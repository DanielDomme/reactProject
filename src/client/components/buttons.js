import React from 'react';
import { func, string } from 'prop-types';
import '../app.css';

const PostButton = ({ text, toggleModalVisibility }) => (
  <button type="button" className="postButton" onClick={toggleModalVisibility}>{text}</button>
);
PostButton.defaultProps = {
  text: ''
};

PostButton.propTypes = {
  text: string,
  toggleModalVisibility: func.isRequired
};

const CloseButton = ({ closeButtonHandler }) => (
  <button type="button" className="closeButton" onClick={closeButtonHandler} />
);

CloseButton.propTypes = {
  closeButtonHandler: func.isRequired
};

export { PostButton, CloseButton };
