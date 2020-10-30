import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './subPages.css';

export default class PepperGallery extends Component {
  state = {
    images: [
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

  render() {
    // TODO: Vomit Faces
    const { images } = this.state;
    const imageComponentsArray = images.map((item, i) => (
      <Card key={i.toString()} className="imageCard">
        <Card.Img src={item} alt={i.toString()} />
      </Card>
    ));
    let imagesWithRows = [];
    const setupImages = [];
    let counter = 0;
    const finalIteration = [];
    imageComponentsArray.forEach((item) => {
      if (counter < 4) {
        imagesWithRows.push(item);
        counter += 1;
      }
      if (counter === 4) {
        setupImages.push(imagesWithRows);
        counter = 0;
        imagesWithRows = [];
      }
    });
    setupImages.forEach((item, i) => {
      finalIteration.push(
        <div className="d-flex justify-content-center" key={i.toString()}>{item}</div>
      );
    });
    return (
      <div className="flex-container">
        {finalIteration}
      </div>
    );
  }
}
