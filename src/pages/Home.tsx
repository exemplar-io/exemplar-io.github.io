import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../api/api';
import PrimaryButton from '../components/UI/PrimaryButton';
import PrimaryInputField from '../components/UI/PrimaryInputField';
import Spinner from '../components/UI/Spinner/Spinner';
import { CopyBlock, dracula } from 'react-code-blocks';

const Home = () => {
  const [token, setToken] = useState('');
  const [msRepoName, setRepoName] = useState('');
  const [apiRepoName, setApiRepoName] = useState('');
  const [frontendRepoName, setFrontendRepoName] = useState('');
  const [rootRepoName, setRootRepoName] = useState('');
  const [repoLink, setRepoLink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      'https://github.com/login/oauth/authorize?client_id=e78392cb4d38b6f34b4b&scope=repo delete_repo workflow');

  const onOpenRepoClick = () => window.open(repoLink);

  const onRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setRepoName(event.target.value);
  };
  const onApiRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setApiRepoName(event.target.value);
  };

  const onFrontendRepoNameInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setError('');
    setFrontendRepoName(event.target.value);
  };

  const onRootRepoNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setRootRepoName(event.target.value);
  };

  const onCreateRepoClick = () => {
    setLoading(true);
    api
      .createRepo(
        msRepoName,
        apiRepoName,
        frontendRepoName,
        rootRepoName,
        token,
      )
      .then((repoLink) => {
        setLoading(false);
        setRepoLink(repoLink);
      })
      .catch((err) => {
        if (err.response.status === 422)
          setError(
            'Oh no! One or more of the repository names were already taken! 😮 Find a new name and try again!',
          );
        setRepoLink('');
        setLoading(false);
      });
  };

  const onDeleteReposClick = async () => {
    api
      .deleteRepos(
        msRepoName,
        apiRepoName,
        frontendRepoName,
        rootRepoName,
        token,
      )
      .then(() => {
        setError('');
        setRepoLink('');
      })
      .catch(() => {
        setError(
          'Oh no! One or more of the repositories could not be deleted! 😮 Please try again later',
        );
      });
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
            Cool! The next step is to choose a root project name, a microservice
            repo name and a API gateway repo name 😎
          </h3>

          <div className="space-y-3">
            <div hidden={!error}>
              <p className="text-error text-xl">{error}</p>
            </div>

            <div>
              <PrimaryInputField
                id="rootRepoName"
                error={error}
                placeholder="Root Repository name"
                value={rootRepoName}
                onChange={onRootRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryInputField
                id="username"
                error={error}
                placeholder="MS Repository name"
                value={msRepoName}
                onChange={onRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryInputField
                id="apiRepoName"
                error={error}
                placeholder="Api Repository name"
                value={apiRepoName}
                onChange={onApiRepoNameInputChange}
              />
            </div>
            <div>
              <PrimaryInputField
                id="frontendRepoName"
                error={error}
                placeholder="Frontend Repository name"
                value={frontendRepoName}
                onChange={onFrontendRepoNameInputChange}
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
            <div>{loading ? <Spinner /> : null}</div>
          </div>

          {repoLink ? (
            <>
              <div>
                <h3 className="text-secondary text-xl">
                  Alright, this is it. Here's the link to your new Github repo!
                  👊🏼
                </h3>
              </div>
              <div>
                <PrimaryButton
                  title="Open Root Repository"
                  onClick={onOpenRepoClick}
                />
              </div>
              <div>
                <h3 className="text-secondary text-xl">
                  To download the entire project, open a terminal and paste and
                  execute the command below!
                </h3>
              </div>
              <div>
                <CopyBlock
                  theme={dracula}
                  text={`git clone --recurse-submodules -j8 ${repoLink}`}
                  language={'shell'}
                  showLineNumbers={false}
                  startingLineNumber={1}
                />
              </div>
              <div>
                <h3 className="text-secondary text-xl">
                  Now navigate to the project folder and run the entire
                  project!🍾🥂🥳
                </h3>
              </div>
              <div>
                <CopyBlock
                  theme={dracula}
                  text={`cd ${rootRepoName} \n&& docker-compose up`}
                  language={'shell'}
                  showLineNumbers={false}
                  startingLineNumber={1}
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
