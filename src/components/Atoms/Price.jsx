import React from 'react';

const Price = ({ price, className }) => {
  const formatPrice = (val, fixedDecimals, currencyCode) => {
    const absVal = Math.abs(val);
    const parts = absVal.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (fixedDecimals) {
      const part = absVal.toFixed(fixedDecimals).split('.')[1];
      parts[1] = part;
    }
    const res = parts.join('.');
    return `${val < 0 ? '-' : ''}$${res}${` ${currencyCode}` || ''}`;
  };

  const [value, coin] = price;
  return (
    <div className={className}>
      {formatPrice(value, 0, coin)}
    </div>
  );
};

export default Price;
