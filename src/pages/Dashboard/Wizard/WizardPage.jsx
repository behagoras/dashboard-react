import React from 'react';
import { useParams } from 'react-router-dom';

import Wizard from '../../../components/Form/WizardClass';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { createProperty } from '../../../data/crudProperties';
import Card from '../../../components/Utils/Card/Card';

const onSubmit = async (values) => {
  const response = await createProperty(values);
  console.log(response);
};

const WizardPage = () => {
  const params = useParams();
  return (
    <Card>
      <TitleBar title="Add Property" actions={[]} />
      <Wizard
        onSubmit={onSubmit}
        _id={params ? params._id : ''}
      >
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </Card>
  );
};

export default WizardPage;
