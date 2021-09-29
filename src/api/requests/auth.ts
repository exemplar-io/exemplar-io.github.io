import axios from '../api';

export const auth = (code: string) => {
  return axios.post('/github/auth', { githubCode: code }).then((response) => {
    return response.data;
  });
};
