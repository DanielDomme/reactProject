import React from 'react';
import { bool, func, string } from 'prop-types';
import '../app.css';
import './componentsStyle/componentStyle.css';
import {
  Button,
  Card,
  OverlayTrigger,
  Tooltip
} from 'react-bootstrap';
import trashCan from '../../resources/trashCan.png';
import editIcon from '../../resources/betterEditIcon.png';

const DeleteButton = ({ onDeleteClick }) => (
  <Button variant="outline-dark" className="noBorder" onClick={onDeleteClick}>
    <img className="deleteButton" src={trashCan} alt="Delete Button" />
  </Button>
);

DeleteButton.propTypes = {
  onDeleteClick: func.isRequired
};

const EditButton = ({ onEditClick }) => (
  <Button variant="outline-dark" className="noBorder" onClick={onEditClick}>
    <img className="deleteButton" src={editIcon} alt="Edit Post Button" />
  </Button>
);

EditButton.propTypes = {
  onEditClick: func.isRequired
};

const PostButton = ({
  styleName,
  text,
  toggleModalVisibility,
  changeModalSubmitAndTitleText
}) => (
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
    <button type="button" className={styleName} onClick={() => { toggleModalVisibility(); changeModalSubmitAndTitleText('Post', 'Add a New Medical Entry'); }}>{text}</button>
  </OverlayTrigger>
);
PostButton.defaultProps = {
  text: '',
  changeModalSubmitAndTitleText: () => {}
};

PostButton.propTypes = {
  text: string,
  toggleModalVisibility: func.isRequired,
  styleName: string.isRequired,
  changeModalSubmitAndTitleText: func
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

export {
  DeleteButton, EditButton, PostButton, CloseButton, ImageCardButton
};
