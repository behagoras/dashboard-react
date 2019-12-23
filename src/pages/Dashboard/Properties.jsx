import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../../components/Utils/Card';
import CustomTable from '../../components/Utils/Table/CustomTable';
import propertiesMock from '../../mock/properties3.json';

const Properties = () => {
  console.log('propertiesMock=', propertiesMock);
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <CustomTable
          tableHeaderColor="primary"
          tableHead={['Image', 'Title', 'Description', 'Price']}
          tableData={propertiesMock}
        />
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default Properties;
