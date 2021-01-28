import React, { Component } from 'react';
import MedicalTable from '../../../components/tables';
import './subPages.css';
import {
  sortObjectArrayAscendingByAttribute,
  sortObjectArrayDescendingByAttribute
} from '../../../../utils/ObjectArraySortingUtil';
import { PostButton } from '../../../components/buttons';
import AddMedicalModal from '../../../components/AddMedicalModal';

export default class PepperMedical extends Component {
  state = {
    shouldModalShow: false,
    sortBy: 'entryId',
    isInverted: false,
    tableHeadersMap: [
      {
        entryId: 'Entry ID'
      },
      {
        date: 'Date'
      },
      {
        type: 'Medical Entry Type'
      },
      {
        description: 'Description'
      },
      {
        performedBy: 'Performed By'
      },
      {
        cost: 'Cost'
      }
    ],
    tableEntries: [
      {
        entryId: 1, date: new Date('1/10/98'), type: 'Surgery', description: 'Took pepper in to get spayed.', performedBy: 'Dr. Kaitlyn', cost: 200.00
      },
      {
        entryId: 2, date: new Date('12 September 2020'), type: 'Grooming', description: 'Trimmed her nails.', performedBy: 'Ashleigh', cost: 0.0
      },
      {
        entryId: 3, date: new Date('23 November 2020'), type: 'Grooming', description: 'Ears were inflamed. Put cleaner in.', performedBy: 'Ashleigh', cost: 0.0
      },
      {
        entryId: 58, date: new Date('5/15/2015'), type: 'Grooming', description: 'Fur trimmed', performedBy: 'Ashleigh', cost: 0.0
      }
    ]
  };

  isSortedAscending = (item) => {
    const { tableEntries } = this.state;
    const table = [...tableEntries];
    let isSorted = true;
    sortObjectArrayAscendingByAttribute(table, item);
    table.forEach((tableItem, i) => {
      if (tableEntries[i][item] !== tableItem[item]) {
        isSorted = false;
      }
    });
    return isSorted;
  }

  onSortClickHandler = (item) => {
    const { tableEntries, sortBy, isInverted } = this.state;
    let inverted;
    if ((item === sortBy && !isInverted) || (this.isSortedAscending(item))) {
      sortObjectArrayDescendingByAttribute(tableEntries, item);
      inverted = true;
    } else {
      sortObjectArrayAscendingByAttribute(tableEntries, item);
      inverted = false;
    }
    this.setState({
      tableEntries,
      sortBy: item,
      isInverted: inverted
    });
  }

  // TODO: Clear out form fields
  handleSubmitModal = (medicalEntry) => {
    const newMedicalEntry = {
      entryId: Date.now(),
      date: new Date(medicalEntry.date),
      type: medicalEntry.entryType,
      description: medicalEntry.description,
      performedBy: medicalEntry.performedBy,
      cost: Number(medicalEntry.cost)
    };
    this.setState(prevState => ({
      tableEntries: [...prevState.tableEntries, newMedicalEntry]
    }));
    this.toggleModal();
  }

  handleEntryClick = (entry) => {
    console.log(entry);
  }

  toggleModal = () => {
    this.setState(prev => ({
      shouldModalShow: !prev.shouldModalShow
    }));
  }

  render() {
    const { tableHeadersMap, tableEntries, shouldModalShow } = this.state;
    return (
      <div className="tableSpacing">
        <MedicalTable
          sortClickHandler={this.onSortClickHandler}
          onEntryClick={this.handleEntryClick}
          tableHeadersMap={tableHeadersMap}
          tableEntries={tableEntries}
        />
        <AddMedicalModal
          shouldMedicalModalShow={shouldModalShow}
          handleCloseModal={() => this.toggleModal()}
          handleModalSubmit={this.handleSubmitModal}
        />
        <PostButton styleName="postButton2" toggleModalVisibility={this.toggleModal} text="+" />
      </div>
    );
  }
}
