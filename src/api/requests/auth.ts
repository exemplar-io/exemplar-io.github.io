import axios from '../api';

export const auth = (code: string) => {
  return axios.post('/github/auth', { githubCode: code }).then((response) => {
    console.log(response.data);

    return response.data;
  });
};
