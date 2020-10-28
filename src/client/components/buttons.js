import React from 'react';
import { bool, func, string } from 'prop-types';
import '../app.css';
import { Card } from 'react-bootstrap';

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

const ImageCardButton = ({
  buttonClickHandler, cardImage, buttonText, size
}) => (
  <Card className={`text-black ${size ? 'imageCardsLarge' : 'imageCardsSmall'} buttonize`} onClick={buttonClickHandler}>
    {size ? null : <Card.Title style={{ fontSize: '11px' }}>{buttonText}</Card.Title>}
    <Card.Img className="navCardImages" src={cardImage} alt="Picture of Pepper" />
    <Card.ImgOverlay>
      <Card.Title style={{ fontSize: `${size ? '50px' : '0'}` }}>
        {buttonText}
      </Card.Title>
    </Card.ImgOverlay>
  </Card>
);

ImageCardButton.propTypes = {
  buttonClickHandler: func.isRequired,
  cardImage: string.isRequired,
  buttonText: string.isRequired,
  size: bool.isRequired
};

export { PostButton, CloseButton, ImageCardButton };
