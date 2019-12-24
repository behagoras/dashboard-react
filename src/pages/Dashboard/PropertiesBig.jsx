import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Utils/Card';

import getProperties from '../../data/getProperties';

const Table = styled.table`
    margin-top: -30px;
    max-width: 100%;
    margin-bottom: 1rem;
    margin-left: 30px;
    margin-right: 30px;
    background-color: transparent;
    margin-bottom: 0;
`;
const TableHead = styled.thead`
    font-weight:bold;
    color: #FFF;
    position: relative;
    background: linear-gradient(60deg,#ab47bc,#8e24aa);
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(156,39,176,.4);
    border-radius: 3px;
`;

const TableBody = styled.tbody``;
const TableRow = styled.tr``;
const TableCell = styled.td`
    max-width: 40vw;
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    padding-left: 1.5rem;
`;

const Properties = () => {

  getProperties().then((data) => {
    console.log('data', data);

  });

  return (
    <Card>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
            <TableCell>Element</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default Properties;
