import axios from '../api';

export const createRepo = (projectName: string, githubToken: string) =>
  axios
    .post('/github/repo', {
      projectName,
      githubToken,
    })
    .then((response) => response.data.rootUrl);
