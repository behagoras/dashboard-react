import React from 'react';
import styled from 'styled-components';

const ColumnWrapper = styled.td``;

const Column = (props) => {
  return (
    <ColumnWrapper>
      {props.children}
    </ColumnWrapper>
  );
};

export default Column;
