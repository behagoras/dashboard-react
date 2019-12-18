import React from 'react';
import styled from 'styled-components';

const PropertyListWrapper = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 10px;
    margin:0 auto;
    justify-items: center;

`;

const PropertyList = (props) => {
  return (
    <PropertyListWrapper>
      {props.children}
    </PropertyListWrapper>
  );
};

export default PropertyList;
