import React, { Component } from 'react';
import { func } from 'prop-types';
import { Container } from 'react-bootstrap';

export default class Knitting extends Component {
  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Knitting');
  }

  render() {
    return (
      <Container>
        <h1>
          Knitting. Include projects (like woodworking) and yarn inventory.
        </h1>
      </Container>
    );
  }
}

Knitting.defaultProps = {
  updatePageTitle: () => {}
};

Knitting.propTypes = {
  updatePageTitle: func
};
