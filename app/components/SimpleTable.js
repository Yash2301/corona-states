/* eslint-disable react/prop-types */
import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function SimpleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table className="table-hover">
        <Thead>
          <Tr>
            {props.columns.map(column => (
              <Th key={`${column.field}`}>{column.label}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {props.rows.map(row => (
            <Tr key={row.country_name}>
              {props.columns.map(column => (
                <Td key={`${row.country_name}.${column.field}`}>
                  {row[column.field]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
