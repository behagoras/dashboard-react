import React from 'react';
import styled from 'styled-components';
import { Table as TableTablerReact } from 'tabler-react';

const { Row: RowTabler } = TableTablerReact;
// conCst { Col: ColTabler } = TableTablerReact;
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
  console.log('data', data[0]);
  console.log('typeof(data)', Array.isArray(data));
  return (
    <>
      <RowTabler>
        {
          data.map(
            (property) => {
              console.log('property', property);
              return (
                <Column>
                  {
                    property
                  }
                </Column>
              );
            },
          )
        }
      </RowTabler>
    </>
  );
};

export default TableRow;
