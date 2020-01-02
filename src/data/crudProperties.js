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
    imageSource,
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
    amount,
    formattedAmount,
    currency,
    title,
    description,
    coin,
  } = values;

  const payload = {};
  // debugger;
  title ? payload.title = title : '';
  description ? payload.description = description : '';
  imageSource ? payload.image.src = imageSource : '';
  payload.address = {};
  street ? payload.address.street = street : '';
  city ? payload.address.city = city : '';
  state ? payload.address.state = state : '';
  zip ? payload.address.zip = zip : '';
  payload.owner = {};
  fullName ? payload.owner.fullName = fullName : '';
  residencePhone ? payload.owner.residencePhone = residencePhone : '';
  email ? payload.owner.email = email : '';
  birthplace ? payload.owner.birthplace = birthplace : '';
  mobilePhone ? payload.owner.mobilePhone = mobilePhone : '';
  gender ? payload.owner.gender = gender : '';
  payload.prices = {};
  price ? payload.prices.amount = price : '';
  amount ? payload.prices.amount = amount : '';
  price ? payload.prices.formattedAmount = price : '';
  formattedAmount ? payload.prices.formattedAmount = formattedAmount : '';
  coin ? payload.prices.currency = coin : '';
  currency ? payload.prices.currency = currency : '';
  // debugger;
  payload.img = {};
  imageSource ? payload.img.src = imageSource : '';
  // payload.img.src = 'https://img10.naventcdn.com/avisos/18/00/54/81/15/53/360x266/131982081.jpg';

  console.log(JSON.stringify(payload, 0, 2));
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

export const updateProperty = async (_id, values) => {
  const payload = stateToProperty(values);
  const userData = await axios({
    url: `https://express-api.behagoras.now.sh/api/properties/${_id}`,
    method: 'put',
    data: payload,
  });
  return userData;
};
