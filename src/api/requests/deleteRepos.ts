import axios from '../api';

export const deleteRepos = async (
  msRepoName: string,
  apiRepoName: string,
  frontendRepoName: string,
  rootRepoName: string,
  githubToken: string,
) => {
  const response = await axios.delete(
    `/github/repo?msRepo=${msRepoName}&apiRepo=${apiRepoName}&frontendRepo=${frontendRepoName}&rootRepo=${rootRepoName}&token=${githubToken}`,
  );
  console.log(response);

  return response.data;
};
