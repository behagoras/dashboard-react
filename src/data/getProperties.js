import config from '../config';

const getProperties = async () => {
  const response = await fetch(`${config.apiUrl}/api/properties`, {
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export default getProperties;
