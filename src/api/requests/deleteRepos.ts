import axios from '../api';

export const deleteRepos = async (
  msRepoName: string,
  rootRepoName: string,
  githubToken: string,
) => {
  console.log(msRepoName);
  console.log(rootRepoName);
  console.log(githubToken);

  const response = await axios.delete(
    `/github/repo?msRepo=${msRepoName}&rootRepo=${rootRepoName}&token=${githubToken}`,
  );
  console.log(response);

  return response.data;
};
