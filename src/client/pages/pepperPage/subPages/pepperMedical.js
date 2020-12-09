import React, { Component } from 'react';
import MedicalTable from '../../../components/tables';
import './subPages.css';
import {
  sortObjectArrayAscendingByAttribute,
  sortObjectArrayDescendingByAttribute
} from '../../../../utils/ObjectArraySortingUtil';

export default class PepperMedical extends Component {
  state = {
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
        title: 'Title'
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
        entryId: 1, date: new Date('1/10/98'), title: 'Spay', description: 'Took pepper in to get spayed.', performedBy: 'Dr. Kaitlyn', cost: 200.00
      },
      {
        entryId: 2, date: new Date('12 September 2020'), title: 'Nails Trimmed', description: 'Trimmed her nails.', performedBy: 'Ashleigh', cost: 0.0
      },
      {
        entryId: 3, date: new Date('23 November 2020'), title: 'Ears Cleaned', description: 'Ears were inflamed. Put cleaner in.', performedBy: 'Ashleigh', cost: 0.0
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

  render() {
    const { tableHeadersMap, tableEntries } = this.state;
    return (
      <div className="tableSpacing">
        <MedicalTable
          sortClickHandler={this.onSortClickHandler}
          tableHeadersMap={tableHeadersMap}
          tableEntries={tableEntries}
        />
      </div>
    );
  }
}
