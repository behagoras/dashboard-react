import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    -webkit-font-smoothing: antialiased;
    background-color: ${(props) => props.theme.colors.background.base};
    border-radius: 10px;
    box-shadow: 0px 3px 11px 0px ${(props) => props.theme.colors.primary.lighter}, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A;
    overflow: hidden;
`;

const Card = (props) => {
  return (
    <CardWrapper>
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
