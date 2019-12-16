import React from 'react';
import styled from 'styled-components';

const CardBodyWrapper = styled.div`
    font-weight: 300;
    line-height: 1.5em;
    color: #333;
    font-size: .875rem;
    -webkit-tap-highlight-color: transparent;
    letter-spacing: normal!important;
    -webkit-font-smoothing: antialiased;
    flex: 1 1 auto;
    padding: 0.9375rem 20px;
    position: relative;
    -webkit-box-flex: 1;
`;

const CardBody = (props) => {
  return (
    <CardBodyWrapper>
      {props.children}
    </CardBodyWrapper>
  );
};

export default CardBody;
