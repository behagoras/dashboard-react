/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import Wizard from '../../../components/Form/Wizard';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

const required = (value) => (value ? undefined : 'Required');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const WizardPage = () => (
  <>
    <TitleBar title="Add Property" actions={[]} />
    <Wizard
      initialValues={{ employed: true, stooge: 'larry' }}
      onSubmit={onSubmit}
    >
      <Page1 />
      <Page2 />
    </Wizard>
  </>
);

export default WizardPage;
