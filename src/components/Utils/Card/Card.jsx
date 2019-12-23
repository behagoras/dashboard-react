import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.background.base};
    border-radius: 10px;
    box-shadow: 0 6px 6px -1px rgba(10, 22, 70, 0.1);
    max-width:${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    width:${(props) => (props.width ? props.width : '100%')};
    display:grid;
    margin-top:30px;
`;

const Card = ({ maxWidth, children }) => {
  return (
    <CardWrapper maxWidth={maxWidth}>
      {children}
    </CardWrapper>
  );
};

export default Card;
