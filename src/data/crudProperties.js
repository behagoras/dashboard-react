import axios from 'axios';

export const propertyToState = (property) => {
  const {
    _id,
    title,
    description,
    // img,
    address,
    owner,
    prices } = property;
  // const { src } = img;
  const { street, city, state, zip } = address;
  const {
    fullName,
    residencePhone,
    email,
    birthplace,
    mobilePhone,
    // gender,
  } = owner;
  const {
    amount,
    // formattedAmount,
    // currencyUid,
    currency,
  } = prices;

  return {
    _id,
    street,
    city,
    state,
    zip,
    fullName,
    residencePhone,
    email,
    birthplace,
    mobilePhone,
    civilStatus: 'N/A',
    coin: currency,
    title,
    description,
    price: amount,
  };

};

export const stateToProperty = (values) => {
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
  return payload;
};

export const getProperties = async () => {
  const response = await fetch('https://express-api.behagoras.now.sh/api/properties', {
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export const getProperty = async (_uid) => {
  const userData = await axios({
    url: `https://express-api.behagoras.now.sh/api/properties/${_uid}`,
    method: 'get',
  });

  return userData;
};

export const createProperty = async (values) => {

  const payload = stateToProperty(values);

  const userData = await axios({
    url: 'https://express-api.behagoras.now.sh/api/properties',
    method: 'post',
    data: payload,
  });

  return userData;

};

