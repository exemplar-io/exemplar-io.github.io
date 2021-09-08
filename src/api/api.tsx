import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

export default instance;

export { auth } from './requests/auth';
export { createRepo } from './requests/createRepo';
export { deleteRepos } from './requests/deleteRepos';
