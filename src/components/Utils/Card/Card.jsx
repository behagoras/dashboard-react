import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.background.base};
    border-radius: 10px;
    box-shadow: 0 6px 6px -1px rgba(10, 22, 70, 0.1);
    /* overflow: hidden; */
    max-width:${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    width:${(props) => (props.width ? props.width : '100%')};
    display:grid;
    margin-top:30px;
`;

const Card = (props) => {
  const { maxWidth } = props;
  return (
    <CardWrapper maxWidth={maxWidth}>
      {props.children}
    </CardWrapper>
  );
};

export default Card;

// const CardWrapper = styled.div`
//     -webkit-font-smoothing: antialiased;
//     background-color: ${(props) => {
//     console.log(props);
//     return 'white';
//     // return props.theme.colors.background.base;
//   }
// };
//     border-radius: 10px;
//     box-shadow: 0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;
//     overflow: hidden;
// `;
