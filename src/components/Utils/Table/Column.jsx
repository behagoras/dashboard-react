import React from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.td``;

const Column = ({ children }) => {
  return (
    <ColumnWrapper>
      {children}
    </ColumnWrapper>
  );
};

export default Column;
