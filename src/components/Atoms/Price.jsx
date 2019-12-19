import React from 'react';
import styled from 'styled-components';
import { CardTitle } from '../Utils/Card';

const PriceWrapper = styled.div`
    font-size:${(props) => props.theme.fontSize};
    text-align:left;
`;

const Price = (props) => {
  const formatPrice = (val, fixedDecimals, currencyCode) => {
    const absVal = Math.abs(val);
    const parts = absVal.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (fixedDecimals) {
      // eslint-disable-next-line prefer-destructuring
      parts[1] = absVal.toFixed(fixedDecimals).split('.')[1];
    }
    const res = parts.join('.');
    return `${val < 0 ? '-' : ''}$${res}${` ${currencyCode}` || ''}`;
  };

  const { price } = props;
  const [value, coin] = price;
  return (
    <PriceWrapper>
      <CardTitle>
        {formatPrice(value, 0, coin)}
      </CardTitle>
    </PriceWrapper>
  );
};

export default Price;
