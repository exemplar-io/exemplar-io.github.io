import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../api/api';
import PrimaryButton from '../components/UI/PrimaryButton';
import PrimaryInputField from '../components/UI/PrimaryInputField';

const Home = () => {
  const [token, setToken] = useState('');
  const [repoName, setRepoName] = useState('');
  const [repoLink, setRepoLink] = useState('');

  const query = new URLSearchParams(useLocation().search);
  const code = query.get('code');

  useEffect(() => {
    if (code) {
      api.auth(code).then((token) => {
        setToken(token);
      });
    }
  }, [code]);

  const onAuthClick = () =>
    (window.location.href =
      'https://github.com/login/oauth/authorize?client_id=d01fafaf5472594c537f&scope=repo');

  const onOpenRepoClick = () => window.open(repoLink);

  const onRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRepoName(event.target.value);

  const onCreateRepoClick = () => {
    api
      .createRepo(repoName, token)
      .then((repoLink) => setRepoLink(repoLink))
      .catch(() => {
        setRepoLink('');
      });
  };

  return (
    <main className={'container mx-auto w-2/6 space-y-10'}>
      <h1 className="text-secondary text-4xl">Peareasy Elastics 🔥</h1>
      <h3 className="text-secondary text-xl">
        In order for us to be able to create an awesome project template for
        you, we need you to authorize your Github account with us.
      </h3>
      <div>
        <PrimaryButton
          disabled={!!token}
          onClick={onAuthClick}
          title={!token ? 'Authorize Github' : 'You have authorized Github 🎉'}
        />
      </div>

      {!!token ? (
        <>
          <h3 className="text-secondary text-xl">
            Cool! The next step is to choose a project name 😎
          </h3>

          <div>
            <PrimaryInputField
              id="username"
              placeholder="Repository name"
              value={repoName}
              onChange={onRepoNameInputChange}
            />
          </div>
          <div>
            <PrimaryButton
              title="Create Repository"
              onClick={onCreateRepoClick}
              disabled={!token || !repoName}
            />
          </div>

          {repoLink ? (
            <>
              <div>
                <h3 className="text-secondary text-xl">
                  Alright, this is it. Open your newly created Github repo with
                  a NestJS template ready to go! 👊🏼
                </h3>
              </div>
              <div>
                <PrimaryButton
                  title="Open Repository"
                  onClick={onOpenRepoClick}
                />
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </main>
  );
};

export default Home;
