import React, { Component } from 'react';
import { func } from 'prop-types';
import { Accordion } from 'react-bootstrap';
import { YarnTable } from '../components/tables';
import { Gallery } from '../components/gallery';

export default class Knitting extends Component {
  state = {
    sortBy: 'entryId',
    isInverted: false,
    tableHeadersMap: [
      {
        entryId: 'Entry ID'
      },
      {
        pictureLocation: 'Picture'
      },
      {
        date: 'Date'
      },
      {
        brand: 'Brand'
      },
      {
        notes: 'Notes'
      },
      {
        yarnWeight: 'Weight'
      },
      {
        color: 'Color'
      },
      {
        material: 'Material'
      },
      {
        skeinCount: 'Number of Skeins'
      },
      {
        lotNumber: 'Lot Number'
      },
      {
        amountRemaining: 'Amount Remaining'
      },
      {
        storageLocation: 'Storage Location'
      },
      {
        cost: 'Cost Per Skein'
      }
    ],
    tableEntries: [
      {
        entryId: 1, pictureLocation: 'nothing', date: new Date('1/10/98'), brand: 'Lion', notes: 'Pretty Yarn.', yarnWeight: 'Sport', color: 'Brown', material: 'Wool', lotNumber: '1a', amountRemaining: 2.5, storageLocation: 'Closet box', cost: 200.00, skeinCount: 5,
      },
    ],
    projectArray: [
      {
        postTitle: 'First Project', bodyContent: 'I knitted', imageLocation: '../../../public/images/exampleKnitted.jpeg'
      }
    ]
  }

  componentDidMount() {
    const { props } = this;
    props.updatePageTitle('Knitting');
  }

  onDeleteButtonClick = () => null

  onEntryClick = () => null

  sortClickHandler = () => null

  render() {
    const { tableHeadersMap, tableEntries, projectArray } = this.state;
    return (
      <div>
        <h1>
          Knitting. Include projects (like woodworking) and yarn inventory.
        </h1>
        <Accordion>
          <Accordion.Toggle eventKey="0">
            { /* TODO: add modal toggle button and enable sorting and edit */ }
            <h3>Yarn Inventory</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <YarnTable
              onDeleteButtonClick={this.onDeleteButtonClick}
              tableEntries={tableEntries}
              onEntryClick={this.onEntryClick}
              tableHeadersMap={tableHeadersMap}
              sortClickHandler={this.sortClickHandler}
            />
          </Accordion.Collapse>
        </Accordion>
        <Accordion>
          <Accordion.Toggle eventKey="1">
            { /* TODO: add modal toggle button and enable multiple images */ }
            <h3>Knitting Projects</h3>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Gallery galleryArray={projectArray} />
          </Accordion.Collapse>
        </Accordion>
      </div>
    );
  }
}

Knitting.defaultProps = {
  updatePageTitle: () => {}
};

Knitting.propTypes = {
  updatePageTitle: func
};
