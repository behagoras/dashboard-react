/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

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
  return (
    <Card>
      <TitleBar title="Add Property" actions={[]} />
      <Wizard
        initialValues={{ employed: true }}
        onSubmit={onSubmit}
      >
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </Card>
  );
};

export default WizardPage;
