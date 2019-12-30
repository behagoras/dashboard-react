import React, { useState, useEffect } from 'react';
import Card, { CardHeader, CardBody, CardFooter } from '../../components/Utils/Card';
import CustomTable from '../../components/Utils/Table/CustomTable';
import propertiesMock from '../../mock/properties1.json';

import { getProperties } from '../../data/crudProperties';

const Properties = () => {
  const [properties, setProperties] = useState(propertiesMock);

  async function fetchMyAPI() {
    const data = await getProperties();
    setProperties(data.data);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <Card>
      <CardHeader />
      <CardBody>
        <CustomTable
          tableHeaderColor="primary"
          tableHead={['Image', 'Title', 'Description', 'Price']}
          tableData={properties}
        />
      </CardBody>
      <CardFooter />
    </Card>
  );
};

export default Properties;
