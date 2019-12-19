import React from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Card, { CardHeader, CardBody, CardFooter } from '../../../components/Utils/Card';
import CustomTable from '../../../components/Utils/Table/CustomTable';
import propertiesMock from '../../../mock/properties3.json';
// import longJsonMock from '../../../mock/property.json';
// import shortApiParser from '../../../mock/shortApiParser';

// import longJsonMock from '../../../mock/properties-2';
// console.log('longJsonMock', shortApiParser(longJsonMock));
// const propertiesMock2 = shortApiParser(longJsonMock);
// console.log(JSON.stringify(propertiesMock2));

const Properties = () => {
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
