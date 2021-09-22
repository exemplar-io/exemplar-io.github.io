import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../api/api';
import PrimaryButton from '../components/UI/PrimaryButton';
import PrimaryInputField from '../components/UI/PrimaryInputField';

const Home = () => {
  const [token, setToken] = useState('');
  const [msRepoName, setRepoName] = useState('');
  const [apiRepoName, setApiRepoName] = useState('');
  const [rootRepoName, setRootRepoName] = useState('');
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
      'https://github.com/login/oauth/authorize?client_id=d01fafaf5472594c537f&scope=repo delete_repo');

  const onOpenRepoClick = () => window.open(repoLink);

  const onRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRepoName(event.target.value);
  const onApiRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setApiRepoName(event.target.value);

  const onRootRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    setRootRepoName(event.target.value);

  const onCreateRepoClick = () => {
    api
      .createRepo(msRepoName, apiRepoName, rootRepoName, token)
      .then((repoLink) => setRepoLink(repoLink))
      .catch(() => {
        setRepoLink('');
      });
  };

  const onDeleteReposClick = async () => {
    const res = await api.deleteRepos(
      msRepoName,
      apiRepoName,
      rootRepoName,
      token,
    );
    setRepoLink('');
  };

  return (
    <main className={'container mx-auto w-2/6 space-y-10 pb-20'}>
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

          <div className="space-y-3">
            <div>
              <PrimaryInputField
                id="username"
                placeholder="MS Repository name"
                value={msRepoName}
                onChange={onRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryInputField
                id="apiRepoName"
                placeholder="Api Repository name"
                value={apiRepoName}
                onChange={onApiRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryInputField
                id="rootRepoName"
                placeholder="Root Repository name"
                value={rootRepoName}
                onChange={onRootRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryButton
                title="Create Repositories"
                onClick={onCreateRepoClick}
                disabled={!token || !msRepoName}
              />
            </div>
            <div>
              <PrimaryButton
                title="Delete Repositories"
                onClick={onDeleteReposClick}
              />
            </div>
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
                  title="Open Root Repository"
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
