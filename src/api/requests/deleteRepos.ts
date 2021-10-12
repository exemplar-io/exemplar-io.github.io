import axios from '../api';

export const deleteRepos = async (projectName: string, githubToken: string) => {
  const response = await axios.delete(
    `/github/repo?projectName=${projectName}&token=${githubToken}`,
  );
  return response.data;
};
