import React from 'react';
import { formatPrice } from '../../actions';

const Price = ({ price, className }) => {

  const [value, coin] = price;
  return (
    <div className={className}>
      {formatPrice(value, 0, coin)}
    </div>
  );
};

export default Price;
