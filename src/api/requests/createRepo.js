import axios from '../api';

export const createRepo = (name, token) => {
  return axios.post('/github/repo', { name, token }).then((response) => {
    return response.data;
  });
};
