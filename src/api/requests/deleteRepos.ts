import axios from '../api';

export const deleteRepos = async (
  msRepoName: string,
  apiRepoName: string,
  rootRepoName: string,
  githubToken: string,
) => {
  console.log(msRepoName);
  console.log(rootRepoName);
  console.log(githubToken);

  const response = await axios.delete(
    `/github/repo?msRepo=${msRepoName}&apiRepo=${apiRepoName}&rootRepo=${rootRepoName}&token=${githubToken}`,
  );
  console.log(response);

  return response.data;
};
