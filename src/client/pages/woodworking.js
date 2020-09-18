import React, { Component } from 'react';
import { func } from 'prop-types';
import { Container } from 'react-bootstrap';
import Gallery from '../components/gallery';
import { PostButton } from '../components/buttons';
import WoodworkingPostModal from '../components/modals';
import '../app.css';

export default class Woodworking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageNames: ['Screenshot(1).png', 'Screenshot(2).png', 'Screenshot(3).png', 'Screenshot(4).png'],
      isModalShowing: false
    };
  }

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Woodworking');
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalShowing: !prevState.isModalShowing
    }));
  }

  addPostClickHandler = () => {}

  render() {
    const { imageNames, isModalShowing } = this.state;
    // TODO: break out to gallery, then move gallery contents to cards
    const imageCardArray = imageNames.map((item, i) => (
      <div key={i.toString()} className="d-lg-inline-block woodWorkingPostCards">
        <Gallery title={i.toString()} imageLocation={`../../../public/images/${item}`} />
      </div>
    ));
    return (
      <Container>
        <div>Woodworking</div>
        <WoodworkingPostModal
          isModalShowing={isModalShowing}
          toggleModalVisibility={this.toggleModal}
        />
        {imageCardArray}
        <PostButton text="Add Post" toggleModalVisibility={this.toggleModal} />
      </Container>
    );
  }
}

Woodworking.defaultProps = {
  updatePageTitle: () => {}
};

Woodworking.propTypes = {
  updatePageTitle: func
};
