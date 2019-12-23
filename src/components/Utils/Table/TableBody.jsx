import React from 'react';
import styled from 'styled-components';

const TBody = styled.tbody``;

const TableBody = ({ children }) => {
  return (
    <TBody>
      {children}
    </TBody>
  );
};

export default TBody;
