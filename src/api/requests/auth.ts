import axios from '../api';

export const auth = (code: string) => {
  return axios.post('/github/auth', { code: code }).then((response) => {
    return response.data;
  });
};
