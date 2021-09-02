import axios from '../api';

export const auth = (code: string) => {
  console.log('calling auth');

  return axios.post('/github/auth', { code: code }).then((response) => {
    return response.data;
  });
};
