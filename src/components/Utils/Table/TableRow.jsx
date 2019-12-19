import React from 'react';
import { Table as TableTablerReact } from 'tabler-react';
import ReactHtmlParser from 'react-html-parser';

const { Row: RowTabler } = TableTablerReact;
const { Col: ColTabler } = TableTablerReact;

const TableRow = ({ data }) => {
  // console.log('data', data);
  // console.log('typeof(data)', Array.isArray(data));
  return (
    <>
      <RowTabler>
        {

          data.map(
            (property) => {
              console.log('property', property);
              return (
                <ColTabler>
                  {
                    property
                  }
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
