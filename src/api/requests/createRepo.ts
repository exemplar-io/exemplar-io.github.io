import axios from '../api';

export const createRepo = (
  msRepoName: string,
  rootRepoName: string,
  githubToken: string,
) => {
  console.log(msRepoName);
  console.log(rootRepoName);
  console.log(githubToken);

  return axios
    .post('/github/repo', { msRepoName, rootRepoName, githubToken })
    .then((response) => {
      return response.data.msUrl;
    });
};
