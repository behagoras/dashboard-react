export const formatPrice = (val, fixedDecimals, currencyCode) => {
  const absVal = Math.abs(val);
  const parts = absVal.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (fixedDecimals) {
    const part = absVal.toFixed(fixedDecimals).split('.')[1];
    parts[1] = part;
  }
  const res = parts.join('.');
  return `${val < 0 ? '-' : ''}$${res}${` ${currencyCode}` || ''}`;
};

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
  // imageSource ? payload.image.src = imageSource : '';
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
  price ? payload.prices.formattedAmount = formatPrice(price, 0, '') : '';
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
