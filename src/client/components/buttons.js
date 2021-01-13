import React from 'react';
import { bool, func, string } from 'prop-types';
import '../app.css';
import './componentsStyle/componentStyle.css';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';

const PostButton = ({ styleName, text, toggleModalVisibility }) => (
  <OverlayTrigger
    key={text}
    placement="top"
    delay={{ show: 250 }}
    overlay={(
      <Tooltip style={{ opacity: 0.4, fontSize: 10 }} id={text}>
        Click to Add an Item
      </Tooltip>
    )}
  >
    <button type="button" className={styleName} onClick={toggleModalVisibility}>{text}</button>
  </OverlayTrigger>
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
    <Card.Img className="navCardImages" src={cardImage} alt="Picture of Pepper" />
    <Card.ImgOverlay style={{ padding: '15px 2px' }}>
      <Card.Title style={{ overflow: 'hidden', whiteSpace: 'nowrap', fontSize: `${size ? '3.5vw' : '0.75vw'}` }}>
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
