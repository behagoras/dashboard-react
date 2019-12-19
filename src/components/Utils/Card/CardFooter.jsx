import React from 'react';
import styled from 'styled-components';

const CardFooterWrapper = styled.div`
    padding:10px;
`;

const CardFooter = (props) => {
  return (
    <CardFooterWrapper>
      {props.children}
    </CardFooterWrapper>
  );
};

export default CardFooter;
