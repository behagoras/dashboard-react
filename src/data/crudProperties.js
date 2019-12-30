import axios from 'axios';

export const getProperties = async () => {
  const response = await fetch('https://express-api.behagoras.now.sh/api/properties', {
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export const createProperty = async (values) => {
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
    // civilstatus,
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
      url: 'https://express-api.behagoras.now.sh/api/properties',
      method: 'post',
      data: payload,
    },
  );

  return userData;

};

