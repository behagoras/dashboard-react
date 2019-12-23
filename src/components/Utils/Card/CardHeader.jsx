import React from 'react';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  overflow:hidden;
`;

const CardHeader = ({ children }) => {
  return (
    <CardHeaderWrapper>
      {children}
    </CardHeaderWrapper>
  );
};

export default CardHeader;
