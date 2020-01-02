import React from 'react';
import { useParams } from 'react-router-dom';

import Wizard from '../../../components/Form/WizardClass';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { createProperty, updateProperty } from '../../../data/crudProperties';
import Card from '../../../components/Utils/Card/Card';

const WizardPage = (props) => {

  const { type } = props;
  const params = useParams();

  const onSubmit = async (values) => {

    if (type === 'update') {
      const { _id } = params;
      const response = await updateProperty(_id, values);
      console.log(response);

    } else if (type === 'create') {
      const response = await createProperty(values);
      console.log(response);

    }
  };

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
