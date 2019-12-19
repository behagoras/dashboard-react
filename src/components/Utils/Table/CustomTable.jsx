import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableRow from './TableRow';

const CustomTable = (props) => {
  const {
    tableHeaderColor,
    tableHead,
    tableData,
  } = props;
  return (
    <Table>
      <TableHeader
        data={tableHead}
      >
        Header
      </TableHeader>
      <TableBody>
        {
          tableData.map((data, index) => {
            return (<TableRow data={data} />);
          })
        }
      </TableBody>
      <TableFooter>
        Footer
      </TableFooter>
    </Table>
  );
};

export default CustomTable;

{ /* <CustomTable
  tableHeaderColor="primary"
  tableHead={['Name', 'Country', 'City', 'Salary']}
  tableData={[
    ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
    ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
    ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
    ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
    ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
    ['Mason Porter', 'Chile', 'Gloucester', '$78,615'],
  ]}
/> */ }
