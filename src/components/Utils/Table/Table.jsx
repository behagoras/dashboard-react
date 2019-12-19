import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  margin-bottom: 0;
  & img {
    max-width:100px;
  }
  & tr td:first-child, .card-table tr th:first-child {
    padding-left: 1.5rem;
  }
  & td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
  }
`;

const TableBody = styled.tbody``;

const Table = (props) => {
  return (
    <TableWrapper>

      {props.children}

    </TableWrapper>
  );
};

export default Table;

