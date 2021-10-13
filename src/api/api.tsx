import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});

export default instance;

export { auth } from './requests/auth';
export { createRepo } from './requests/createRepo';
export { deleteRepos } from './requests/deleteRepos';
