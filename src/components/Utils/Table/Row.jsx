import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Table as TableTablerReact } from 'tabler-react';

const { Row: RowTabler } = TableTablerReact;

const RowWrapper = styled.tr`
`;
const Row = (props) => {
  return (
    <RowTabler>
      { props.href ? (
        <Link to={props.href}>
          {props.children}
        </Link>
      ) : (
        <>
          {props.children}
        </>
      )}
    </RowTabler>
  );
};

export default Row;
