import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './subPages.css';
import { ZoomPictureModal } from '../../../components/modals';
import { PostButton } from '../../../components/buttons';
import AddPictureModal from '../../../components/addGalleryPictureModal';


// TODO: Refactor to generic gallery.  Pass API Array
export default class PepperGallery extends Component {
  state = {
    shouldShowZoomPictureModal: false,
    shouldShowAddPictureModal: false,
    zoomPictureModalToShow: '',
    images: [
      '../../../public/images/Screenshot(1).png',
      '../../../public/images/awardsPepper.jpeg',
      '../../../public/images/busyPepper.jpeg',
      '../../../public/images/crazyPepper.jpeg',
      '../../../public/images/medicalPepper.jpeg',
      '../../../public/images/Screenshot(2).png',
      '../../../public/images/Screenshot(3).png',
      '../../../public/images/Screenshot(4).png',
      '../../../public/images/Screenshot(1).png',
      '../../../public/images/awardsPepper.jpeg',
      '../../../public/images/busyPepper.jpeg',
      '../../../public/images/crazyPepper.jpeg',
      '../../../public/images/medicalPepper.jpeg',
      '../../../public/images/Screenshot(2).png',
      '../../../public/images/Screenshot(3).png',
      '../../../public/images/Screenshot(4).png',
      '../../../public/images/external-content.duckduckgo.com.jpg'
    ]
  };

  onImageClick = (item) => {
    console.log(`CLICKED ${item}`);
    this.setState({ shouldShowZoomPictureModal: true, zoomPictureModalToShow: item });
  }

  closeZoomModal = () => {
    this.setState({ shouldShowZoomPictureModal: false });
  }

  closeAddImageModal = () => {
    this.setState({ shouldShowAddPictureModal: false });
  }

  shouldShowAddPictureModal = () => {
    this.setState({ shouldShowAddPictureModal: true });
  }

  // handleCloseAddPictureModal,
  handleSubmitAddPictureModal = (image) => {
    this.setState(prevState => ({
      images: [...prevState.images, image]
    }));
    this.closeAddImageModal();
  }

  render() {
    const {
      images, zoomPictureModalToShow, shouldShowZoomPictureModal, shouldShowAddPictureModal
    } = this.state;
    let imagesRows = [];
    const finalIteration = [];
    images.forEach((item, i) => {
      if ((i + 1) % 4 === 0) {
        finalIteration.push(<div className="d-flex justify-content-center" key={i.toString()}>{imagesRows}</div>);
        imagesRows = [];
      }
      imagesRows.push(
        <Card onClick={() => this.onImageClick(item)} key={i.toString()} className="imageCard">
          <Card.Img src={item} alt={i.toString()} />
        </Card>
      );
      if (images.length === i + 1) {
        finalIteration.push(<div className="d-flex justify-content-center" key={i.toString()}>{imagesRows}</div>);
      }
    });
    return (
      <div>
        <AddPictureModal
          shouldShowAddPictureModal={shouldShowAddPictureModal}
          handleCloseAddPictureModal={this.closeAddImageModal}
          handleSubmitAddPictureModal={this.handleSubmitAddPictureModal}
        />
        <ZoomPictureModal
          shouldModalShow={shouldShowZoomPictureModal}
          shouldCloseZoomModal={() => this.closeZoomModal()}
          imageToShow={zoomPictureModalToShow}
        />
        <div className="flex-container">
          {finalIteration}
        </div>
        <PostButton styleName="postButton2" toggleModalVisibility={this.shouldShowAddPictureModal} text="+" />
      </div>
    );
  }
}
