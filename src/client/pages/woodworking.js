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
      userImages: [{
        postTitle: 'Cool Stuff',
        imageLocation: '../../../public/images/Screenshot(1).png',
        bodyContent:
        'Look at this'
      },
      {
        postTitle: 'More Cool Stuff',
        imageLocation: '../../../public/images/Screenshot(2).png',
        bodyContent: 'This one is so coo!'
      },
      {
        postTitle: 'Crazy Cool Stuff',
        imageLocation: '../../../public/images/Screenshot(3).png',
        bodyContent: 'Sed ut perspiciatis unde omnis iste '
          + 'natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa '
          + 'quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. '
          + 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia '
          + 'consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam '
          + 'est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam '
          + 'eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim '
          + 'ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut '
          + 'aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate '
          + 'velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      },
      {
        postTitle: 'I\'m Confused',
        imageLocation: '../../../public/images/Screenshot(4).png',
        bodyContent: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut '
      + 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco '
      + 'laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in '
      + 'voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat '
      + 'cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
      ],
      isModalShowing: false
    };
  }

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Woodworking');
  }

  handleModalPost = (postInfo) => {
    console.log('HERE\n');
    const newPost = {
      postTitle: postInfo.postTitle,
      imageLocation: postInfo.imageLocation,
      bodyContent: postInfo.bodyContent
    };
    console.log(`Post Info HErE bodyContent: ${postInfo.bodyContent} imageName: ${postInfo.imageLocation} ${this.state.userImages.length}`);
    this.setState(prevState => ({
      userImages: [...prevState.userImages, newPost]
    }));
    // TODO: left off here clean up. refactor modal form to forms
    console.log(this.state.userImages.length);
    this.toggleModal();
  }

  handleModalClose = () => {
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(prevState => ({
      isModalShowing: !prevState.isModalShowing
    }));
  }

  addPostClickHandler = () => {}

  render() {
    const { userImages, isModalShowing } = this.state;
    // TODO: break out to gallery, then move gallery contents to cards
    const imageCardArray = userImages.map((item, i) => (
      <div key={i.toString()} className="d-lg-inline-block woodWorkingPostCards">
        <Gallery
          title={item.postTitle}
          imageLocation={item.imageLocation}
          body={item.bodyContent}
        />
      </div>
    ));
    return (
      <Container>
        <div>Woodworking</div>
        <WoodworkingPostModal
          isModalShowing={isModalShowing}
          handleModalCancel={this.handleModalClose}
          handleModalSubmit={this.handleModalPost}
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
