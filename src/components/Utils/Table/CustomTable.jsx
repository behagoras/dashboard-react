import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

const CustomTable = (props) => {

  const propertiesToArray = (properties) => {
    const propertyArray = [];
    properties.map((propertyObj) => {
      const property = [
        <img alt={propertyObj.seoTitle} src={propertyObj.promoteImage} />,
        <p>{ReactHtmlParser(propertyObj.seoTitle)}</p>,
        <p>{ReactHtmlParser(propertyObj.searchDescription)}</p>,
        <p>{ReactHtmlParser(propertyObj.price)}</p>,
      ];
      propertyArray.push(property);
    });
    return propertyArray;
  };

  const {
    tableHeaderColor,
    tableHead,
    tableData,
  } = props;
  const data = [];

  tableData.map((element, index) => {
    const myElement = [
      <img alt={element.seoTitle} href={element.promoteImage} />,
      <p>{ReactHtmlParser(element.seoTitle)}</p>,
      <p>{ReactHtmlParser(element.searchDescription)}</p>,
      <p>{ReactHtmlParser(element.price)}</p>,
    ];
    data.push(myElement);
  });
  console.log('CustomTables');
  return (
    <Table>
      <TableHeader
        data={tableHead}
      >
        Header
      </TableHeader>
      <TableBody>
        {
          <TableRow data={data} />
        }
      </TableBody>
      <TableFooter>
        Footer
      </TableFooter>
    </Table>
  );
};

export default CustomTable;
