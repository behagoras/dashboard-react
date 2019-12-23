import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

const CustomTable = (props) => {
  const {
    tableHead,
    tableData,
  } = props;
  const TableRowData = [];
  tableData.map((element) => {
    const myElement = {
      data: [
        <img alt={element.seoTitle} src={element.promoteImage} />,
        <p>{ReactHtmlParser(element.seoTitle)}</p>,
        <p>{ReactHtmlParser(element.searchDescription)}</p>,
        <p>{ReactHtmlParser(`$ ${element.prices.formattedAmount} `)}</p>,
      ],
      _id: element._id,
    };
    TableRowData.push(myElement);
  });

  return (
    <Table>
      <TableHeader
        data={tableHead}
      >
        Header
      </TableHeader>
      <TableBody>
        {
          TableRowData.map((rowData, index) => {
            return <TableRow key={index} data={rowData} />;
          })
        }
      </TableBody>
      <TableFooter />
    </Table>
  );
};

export default CustomTable;
