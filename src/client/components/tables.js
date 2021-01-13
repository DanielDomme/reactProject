import React from 'react';
import { OverlayTrigger, Table, Tooltip } from 'react-bootstrap';
import {
  arrayOf, func, instanceOf, number, shape, string
} from 'prop-types';
import './componentsStyle/componentStyle.css';

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
  return table[key];
};

const MedicalTable = ({ sortClickHandler, tableHeadersMap, tableEntries }) => (
  <Table responsive striped bordered hover>
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
      </tr>
    </thead>
    <tbody>
      {tableEntries.map((tableRow, i) => (
        <tr key={i.toString()}>
          {Object.keys(tableRow).map(keyName => (
            <td key={keyName}>
              {reformatTableStringContentsByKey(keyName, tableRow)}
            </td>
          ))}
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
  sortClickHandler: func.isRequired
};


export default MedicalTable;
