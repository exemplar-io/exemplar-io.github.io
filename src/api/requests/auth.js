import axios from '../api';

export const auth = (code) => {
  return axios.post('/github/auth', { code: code }).then((response) => {
    return response.data;
  });
};
