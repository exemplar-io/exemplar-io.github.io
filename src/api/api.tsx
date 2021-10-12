import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://8eqbhzi5ay.eu-west-1.awsapprunner.com/',
});

export default instance;

export { auth } from './requests/auth';
export { createRepo } from './requests/createRepo';
export { deleteRepos } from './requests/deleteRepos';
