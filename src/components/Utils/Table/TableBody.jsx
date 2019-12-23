import React from 'react';
import styled from 'styled-components';

const TBody = styled.tbody``;

const TableBody = (props) => {
  return (
    <TBody>
      {props.children}
    </TBody>
  );
};

export default TBody;
