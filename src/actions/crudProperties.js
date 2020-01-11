import axios from 'axios';
import { stateToProperty } from '.';
import config from '../config';

export const getProperties = async () => {
  const response = await fetch(`${config.apiHost}/api/properties`, {
    mode: 'cors',
  });
  const data = await response.json();
  return data;
};

export const getProperty = async (_uid) => {
  const userData = await axios({
    url: `${config.apiHost}/api/properties/${_uid}`,
    method: 'get',
  });

  return userData;
};

export const createProperty = async (values) => {

  const payload = stateToProperty(values);

  const userData = await axios({
    url: `${config.apiHost}/api/properties`,
    method: 'post',
    data: payload,
  });

  return userData;

};

export const updateProperty = async (_id, values) => {
  const url = `${config.apiHost}/api/properties/${_id}`;
  const payload = stateToProperty(values);
  const userData = await axios({
    url,
    method: 'put',
    data: payload,
  });
  return userData;
};

export const deleteProperty = async (_id) => {
  const url = `${config.apiHost}/api/properties/${_id}`;
  const response = await fetch(url, {
    method: 'delete',
  });
  const data = await response.json();
  return data;
};
