import React from 'react';
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import {
  arrayOf, func, instanceOf, number, shape, string
} from 'prop-types';
import './componentsStyle/componentStyle.css';
import { DeleteButton } from './buttons';

const reformatTableStringContentsByKey = (key, table) => {
  if (key === 'date') {
    return table[key].toLocaleDateString('en-US',
      {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
  }
  if (key === 'cost') {
    return `$${table[key]}`;
  }
  if (table[key] === undefined) {
    return '';
  }
  return table[key];
};

const MedicalTable = ({
  sortClickHandler,
  tableHeadersMap,
  tableEntries,
  onEntryClick,
  onDeleteButtonClick
}) => (
  <Table responsive striped bordered hover role="grid">
    <thead>
      <tr key={tableHeadersMap.length.toString()}>
        {tableHeadersMap.map(headerRow => (
          Object.keys(headerRow).map(key => (
            <OverlayTrigger
              key={key}
              placement="top"
              delay={{ show: 250 }}
              overlay={(
                <Tooltip style={{ opacity: 0.4, fontSize: 10 }} id={key}>
                  Click to Sort
                </Tooltip>
              )}
            >
              <th className="table-header" onClick={() => sortClickHandler(key)} key={key}>{headerRow[key]}</th>
            </OverlayTrigger>
          ))))}
        <th>Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      {tableEntries.map((tableRow, i) => (
        <tr key={i.toString()}>
          {tableHeadersMap.map(headerRow => (
            Object.keys(headerRow).map(keyName => (
              <td role="gridcell" onClick={() => onEntryClick(tableRow.entryId)} key={keyName}>
                {reformatTableStringContentsByKey(keyName, tableRow)}
              </td>
            ))
          ))}
          {
            <td>
              <DeleteButton onDeleteClick={() => onDeleteButtonClick(tableRow.entryId)} />
            </td>
          }
        </tr>
      ))}
    </tbody>
  </Table>
);


MedicalTable.propTypes = {
  tableHeadersMap: arrayOf(shape({
    entryId: string,
    date: string,
    title: string,
    description: string,
    performedBy: string,
    cost: string
  })).isRequired,
  tableEntries: arrayOf(shape({
    entryId: number,
    date: instanceOf(Date),
    title: string,
    description: string,
    performedBy: string,
    cost: number
  })).isRequired,
  sortClickHandler: func.isRequired,
  onEntryClick: func.isRequired,
  onDeleteButtonClick: func.isRequired
};


export default MedicalTable;
