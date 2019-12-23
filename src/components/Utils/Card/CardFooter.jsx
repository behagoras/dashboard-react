import React from 'react';
import styled from 'styled-components';

const CardFooterWrapper = styled.div`
    padding:10px;
`;

const CardFooter = ({ children }) => {
  return (
    <CardFooterWrapper>
      {children}
    </CardFooterWrapper>
  );
};

export default CardFooter;
