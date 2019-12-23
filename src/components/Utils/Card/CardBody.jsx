import React from 'react';
import styled from 'styled-components';

const CardBodyWrapper = styled.div`
    padding: 8px 18px;
`;

const CardBody = ({ children }) => {
  return (
    <CardBodyWrapper>
      {children}
    </CardBodyWrapper>
  );
};

export default CardBody;
