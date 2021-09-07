import axios from '../api';

export const createRepo = (repoName: string, githubToken: string) => {
  return axios
    .post('/github/repo', { repoName, githubToken })
    .then((response) => {
      return response.data;
    });
};
