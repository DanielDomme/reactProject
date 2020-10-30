import React from 'react';
import { bool, func, string } from 'prop-types';
import '../app.css';
import { Card } from 'react-bootstrap';

const PostButton = ({ styleName, text, toggleModalVisibility }) => (
  <button type="button" className={styleName} onClick={toggleModalVisibility}>{text}</button>
);
PostButton.defaultProps = {
  text: '',
};

PostButton.propTypes = {
  text: string,
  toggleModalVisibility: func.isRequired,
  styleName: string.isRequired
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
    {/* {size ? null : <Card.Title style={{ fontSize: '11px' }}>
    {buttonText.substr(buttonText.indexOf(' ') + 1)}</Card.Title>} */}
    <Card.Img className="navCardImages" src={cardImage} alt="Picture of Pepper" />
    <Card.ImgOverlay>
      <Card.Title style={{ fontSize: `${size ? '4vw' : '0.75vw'}` }}>
        {size ? buttonText : (buttonText.substr(buttonText.indexOf(' ') + 1))}
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
