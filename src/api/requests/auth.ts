import axios from '../api';

export const auth = (code: string) => {
  console.log('calling auth');

  return axios.post('/github/auth', { githubCode: code }).then((response) => {
    return response.data;
  });
};
