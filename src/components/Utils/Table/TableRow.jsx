import React from 'react';
import { Table as TableTablerReact } from 'tabler-react';

const { Row: RowTabler } = TableTablerReact;
const { Col: ColTabler } = TableTablerReact;

const TableRow = (props) => {
  const { data } = props;
  return (
    <>
      <RowTabler>
        {
          data.map(
            (property) => {
              return (
                <ColTabler>
                  {property}
                </ColTabler>
              );
            },
          )
        }
      </RowTabler>
    </>
  );
};

export default TableRow;
