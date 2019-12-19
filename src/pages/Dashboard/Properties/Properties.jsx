import React from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../../../components/Utils/Card';
import CustomTable from '../../../components/Utils/Table/CustomTable';
import propertiesMock from '../../../mock/property.json';

// console.log(propertiesMock[0]);

const Properties = () => {

  const propertiesToArray = (properties) => {
    const propertyArray = [];
    properties.map((propertyObj) => {
      const property = [
        <img alt={propertyObj.seoTitle} src={propertyObj.promoteImage} />,
        <p>{propertyObj.seoTitle}</p>,
        <p>{propertyObj.searchDescription}</p>,
        <p>{propertyObj.price}</p>,
      ];
      propertyArray.push(property);
    });
    return propertyArray;
  };

  console.log(propertiesMock[0]);

  const tableData = [
    ['Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
    ['Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
    ['Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
    ['Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
    ['Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
    ['Mason Porter', 'Chile', 'Gloucester', '$78,615'],
  ];
  return (
    <Card>
      <CardHeader />
      <CardBody>
        <CustomTable
          tableHeaderColor="primary"
          tableHead={['Image', 'Title', 'Description', 'Price']}
          // tableData={tableData}
          tableData={propertiesToArray(propertiesMock)}
        />
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default Properties;
