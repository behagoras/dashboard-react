/* eslint-disable import/prefer-default-export */
import axios from 'axios';

// export const createProperty = (payload) => ({
//   type: 'CREATE_PROPERTY',
//   payload,
// });

export const createProperty = (payload) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

export const registerUser = (payload, redirecUrl) => {
  return (dispatch) => {
    axios.post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(registerRequest(data)))
      .then(() => {
        window.location.href = redirecUrl;
      })
      .catch((err) => dispatch(setError(err)));
  };
};

