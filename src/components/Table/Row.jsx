import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RowWrapper = styled.tr`
`;
const Row = (props) => {
  return (
    <RowWrapper>
      { props.href ? (
        <Link to={props.href}>
          {props.children}
        </Link>
      ) : (
        <>
          {props.children}
        </>
      )}
    </RowWrapper>
  );
};

export default Row;
