import React from 'react';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  overflow:hidden;
`;

const CardHeader = (props) => {
  return (
    <CardHeaderWrapper>
      {props.children}
    </CardHeaderWrapper>
  );
};

export default CardHeader;
