/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Wizard from '../../../components/Form/WizardClass';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import { createProperty, getProperty } from '../../../data/crudProperties';
import Card from '../../../components/Utils/Card/Card';

const onSubmit = async (values) => {
  const response = await createProperty(values);
  console.log(response);
};

const WizardPage = () => {

  const params = useParams();
  const _id = params ? params._id : '';
  const [uid, setUid] = useState(_id);

  // console.log('_id:', _id);
  // useEffect(async () => {
  //   if (_id) {
  //     const myProperty = await getProperty(_id);
  //     const { data } = myProperty.data;
  //     console.log('myProperty', myProperty);
  //     console.log('data', data);
  //     setState({ data });
  //     console.log('state', state);
  //     // debugger;
  //   }

  // }, []);

  return (
    <Card>
      <TitleBar title="Add Property" actions={[]} />
      <Wizard
        // initialValues={state}
        onSubmit={onSubmit}
        _id={uid}
      >
        <Page1 />
        <Page2 />
        <Page3 />
      </Wizard>
    </Card>
  );
};

export default WizardPage;
