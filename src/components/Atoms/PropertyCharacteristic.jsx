import React from 'react';
import styled from 'styled-components';

const Characteristic = styled.div`
    display:grid;
    grid-template-columns: 24px 15px;
    grid-template-rows: 1fr;
    justify-content: center;
    align-content: center;
    margin:auto;
    grid-gap:10px;
    font-size:12px;
    & p {
        margin:auto 0;
        color:${(props) => props.theme.colors.primary.light};

    }
    & svg path {
        fill:${(props) => props.theme.colors.primary.light};
    }
`;

const PropCharacteristic = ({ Icon, qty }) => {
  return (
    <Characteristic>
      <Icon />
      <p>{qty}</p>
    </Characteristic>
  );
};

export default PropCharacteristic;
