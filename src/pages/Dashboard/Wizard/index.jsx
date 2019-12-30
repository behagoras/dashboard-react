/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import axios from 'axios';
import Wizard from '../../../components/Form/Wizard';
import TitleBar from '../../../components/Dashboard/TitleBar';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import config from '../../../config';

// const required = (value) => (value ? undefined : 'Required');
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  // await sleep(300);
  // window.alert(JSON.stringify(values, 0, 2));

  const {
    street,
    city,
    state,
    zip,
    fullName,
    residencePhone,
    mobilePhone,
    email,
    birthplace,
    civilstatus,
    gender,
    price,
    title,
    description,
    coin,
  } = values;

  const payload = {
    title,
    description,
    img: {
      src: 'https://img10.naventcdn.com/avisos/18/00/54/81/15/53/360x266/131982081.jpg',
    },
    address: {
      street,
      city,
      state,
      zip,
    },
    owner: {
      fullName,
      residencePhone,
      email,
      birthplace,
      mobilePhone,
      gender,
    },
    prices: {
      amount: price,
      formattedAmount: price,
      currencyUid: '10',
      currency: coin,
    },
  };
  const userData = await axios(
    {
      url: `${config.apiUrl}/api/properties`,
      method: 'post',
      data: payload,
    },
  );
  console.log(userData);
  console.log(JSON.stringify(payload));
};

const WizardPage = () => (
  <>
    <TitleBar title="Add Property" actions={[]} />
    <Wizard
      initialValues={{ employed: true }}
      onSubmit={onSubmit}
    >
      <Page1 />
      <Page2 />
      <Page3 />
    </Wizard>
  </>
);

export default WizardPage;
