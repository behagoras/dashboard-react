import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
`;
const Column = styled.td`
  max-width:40vw;
  & p {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      min-width:60px;
  }
`;

const TableRow = ({ data }) => {
  return (
    <Row key={data._id}>
      {
        data.data.map(
          (property, index) => {
            return (
              <Column key={index}>
                {
                  property
                }
              </Column>
            );
          },
        )
      }
    </Row>
  );
};

export default TableRow;
