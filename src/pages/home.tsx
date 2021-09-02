import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../api/api';

const Home = () => {
  const [token, setToken] = useState('');
  const [repoName, setRepoName] = useState('');
  const [repoLink, setRepoLink] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      api.auth(code).then((token) => {
        setToken(token.length);
      });
    }
  }, [code]);

  const onAuthClick = () =>
    (window.location.href =
      'https://github.com/login/oauth/authorize?client_id=d01fafaf5472594c537f&scope=repo');

  const onRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRepoName(event.target.value);

  const onCreateRepoClick = () => {
    api.createRepo(repoName, token).then((repoLink) => setRepoLink(repoLink));
  };

  return (
    <main className={'container mx-auto mt-20 space-y-10'}>
      <h1 className="text-purple-500 text-3xl">Peareasy Elastics</h1>
      <div>
        <button
          disabled={!!token}
          className="disabled:opacity-50 disabled:cursor-not-allowed bg-purple-500 shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={onAuthClick}
        >
          {!token ? 'Authorize Github' : 'You have authorized Github'}
        </button>
      </div>

      <div>
        <input
          className="shadow appearance-none border border-purple-500 rounded py-2 px-3 text-purple-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Repository name"
          value={repoName}
          onChange={onRepoNameInputChange}
        />
      </div>

      <div>
        <button
          disabled={!token || !repoName}
          className="disabled:opacity-50 disabled:cursor-not-allowed bg-purple-500 shadow hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          onClick={onCreateRepoClick}
        >
          Create repository
        </button>
      </div>
    </main>
  );
};

export default Home;
