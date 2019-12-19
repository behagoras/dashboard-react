import React from 'react';
import { Table as TableTableReact } from 'tabler-react';

const { Body } = TableTableReact;

const TableBody = (props) => {
  return (
    <>
      {props.children}
    </>
  );
};

export default Body;
