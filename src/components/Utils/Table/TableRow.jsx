import React from 'react';
import { Table as TableTablerReact } from 'tabler-react';
import ReactHtmlParser from 'react-html-parser';

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
              console.log('property', property);

              // console.log(
              //   'ReactHtmlParser',
              //   ReactHtmlParser(`<div>${property}</div>`, { decodeEntities: true })[0],
              // );
              console.log('property.type', property.type);

              const parser = ReactHtmlParser(`<div>${property}</div>`);
              parser.map((element) => {
                console.log('element', element);
              });
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
