import React, { Component } from 'react';
import { func } from 'prop-types';
import pepperGallery from '../../resources/pepperCardImage.png';
import { ImageCardButton } from '../components/buttons';

export default class Pepper extends Component {
  state = {
    shouldButtonsBeLarge: true
  };

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Pepper\'s Corner');
  }

  alternateButtonSize = () => {
    this.setState(prevState => ({
      shouldButtonsBeLarge: !prevState.shouldButtonsBeLarge
    }));
  }

  onGalleryClick = () => {
    this.alternateButtonSize();
    console.log('Gallery Click');
  }

  onMedicalClick = () => {
    this.alternateButtonSize();
    console.log('Medical Click');
  }

  onAwardsClick = () => {
    this.alternateButtonSize();
    console.log('Awards Click');
  }

  onStatsClick = () => {
    this.alternateButtonSize();
    console.log('Stats Click');
  }

  render() {
    const { shouldButtonsBeLarge } = this.state;
    return (
      <div>
        <h1>
          Welcome a Page Dedicated to All Things Pepper
        </h1>
        <div className="flex-container">
          <div className="flex-row d-flex justify-content-center">
            <ImageCardButton buttonClickHandler={this.onGalleryClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Gallery'} cardImage={pepperGallery} />
            <ImageCardButton buttonClickHandler={this.onMedicalClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Medical'} cardImage={pepperGallery} />
          {/*</div>*/}
          {/*<div className="flex-row d-flex justify-content-center">*/}
            <ImageCardButton buttonClickHandler={this.onAwardsClick} size={shouldButtonsBeLarge} buttonText={'Pepper\'s Awards'} cardImage={pepperGallery} />
            <ImageCardButton buttonClickHandler={this.onStatsClick} size={shouldButtonsBeLarge} cardImage={pepperGallery} buttonText={'Pepper\'s Stats'} />
          </div>
        </div>
      </div>
    );
  }
}

Pepper.propTypes = {
  updatePageTitle: func.isRequired
};
