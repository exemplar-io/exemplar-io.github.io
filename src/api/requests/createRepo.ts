import axios from '../api';

export const createRepo = (
  msRepoName: string,
  apiRepoName: string,
  frontendRepoName: string,
  rootRepoName: string,
  githubToken: string,
) => {
  console.log(msRepoName);
  console.log(rootRepoName);
  console.log(githubToken);

  return axios
    .post('/github/repo', {
      msRepoName,
      apiRepoName,
      frontendRepoName,
      rootRepoName,
      githubToken,
    })
    .then((response) => response.data.rootUrl);
};
