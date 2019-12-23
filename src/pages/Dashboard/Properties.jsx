import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../../components/Utils/Card';
import CustomTable from '../../components/Utils/Table/CustomTable';
import propertiesMock from '../../mock/properties3.json';
// import longJsonMock from '../../../mock/property.json';
// import shortApiParser from '../../../mock/shortApiParser';

// import longJsonMock from '../../../mock/properties-2';
// console.log('longJsonMock', shortApiParser(longJsonMock));
// const propertiesMock2 = shortApiParser(longJsonMock);
// console.log(JSON.stringify(propertiesMock2));

const Properties = () => {
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <CustomTable
          tableHeaderColor="primary"
          tableHead={['Image', 'Title', 'Description', 'Price']}
          // tableData={tableData}
          tableData={propertiesMock}
        />
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default Properties;
