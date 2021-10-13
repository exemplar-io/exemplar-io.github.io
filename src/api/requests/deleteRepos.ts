import axios from '../api';

export const deleteRepos = async (projectName: string, githubToken: string) => {
  const response = await axios.delete(
    `/github/repo?projectName=${projectName}&token=${githubToken}`,
  );
  console.log(response);
  return response.data;
};
