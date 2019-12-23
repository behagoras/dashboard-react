import React from 'react';
import styled from 'styled-components';

const TableHeaderWrapper = styled.thead`
  font-family: Roboto,Helvetica,Arial,sans-serif;
  font-weight: bold;
  line-height: 1.5em;
  font-size: .875rem;
  -webkit-tap-highlight-color: transparent;
  letter-spacing: normal!important;
  -webkit-font-smoothing: antialiased;
  z-index: 3 !important;
  border-bottom: none;
  color: #FFF;
  margin: 0 15px;
  position: relative;
  background: linear-gradient(60deg, #ab47bc, #8e24aa);
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(156, 39, 176,.4);
  padding: 15px;
  margin-top: -20px;
  border-radius: 3px;
`;

const TableHeader = ({ data }) => {
  return (
    <TableHeaderWrapper>
      <tr>
        {
          data.map(
            (element, index) => {
              return <td key={index}>element</td>;
            },
          )
        }
      </tr>
    </TableHeaderWrapper>
  );
};

export default TableHeader;
