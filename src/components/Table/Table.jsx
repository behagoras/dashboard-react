import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table``;
const TableBody = styled.tbody``;

const Table = (props) => {
  return (
    <TableWrapper>
      <TableBody>
        {props.children}
      </TableBody>
    </TableWrapper>
  );
};

export default Table;

