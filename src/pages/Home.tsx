import React, { ChangeEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as api from '../api/api';
import PrimaryButton from '../components/UI/PrimaryButton';
import PrimaryInputField from '../components/UI/PrimaryInputField';
import Spinner from '../components/UI/Spinner/Spinner';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const Home = () => {
  const [token, setToken] = useState('');
  const [projectName, setRootRepoName] = useState('');
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
      'https://github.com/login/oauth/authorize?client_id=' +
      process.env.REACT_APP_GITHUB_CLIENT_ID +
      '&scope=repo delete_repo workflow');

  const onOpenRepoClick = () => window.open(repoLink);

  const onProjectNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError('');
    setRootRepoName(event.target.value);
  };

  const onCreateRepoClick = () => {
    setLoading(true);
    api
      .createRepo(projectName, token)
      .then((repoLink) => {
        setLoading(false);
        setRepoLink(repoLink);
      })
      .catch((err) => {
        if (err.response.status === 422)
          setError(
            'Oh no! Project name was already occupied on your Github account! 😮 Find a new name and try again!',
          );
        setRepoLink('');
        setLoading(false);
      });
  };

  const onDeleteReposClick = async () => {
    api
      .deleteRepos(projectName, token)
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
    <main className={'container mx-auto w-2/6 space-y-10 pb-20 pt-20'}>
      <h1 className="text-secondary text-4xl">Exemplar 🔥</h1>
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
            <div hidden={!error}>
              <p className="text-error text-xl">{error}</p>
            </div>

            <div>
              <PrimaryInputField
                id="projectName"
                error={error}
                placeholder="Project name"
                value={projectName}
                onChange={onProjectNameInputChange}
              />
            </div>
            <div>
              <PrimaryButton
                title="Create Repositories"
                onClick={onCreateRepoClick}
                disabled={!token || !projectName}
              />
            </div>
            {process.env.REACT_APP_ENVIRONMENT === 'dev' ? (
              <div>
                <PrimaryButton
                  title="Delete Repositories"
                  onClick={onDeleteReposClick}
                />
              </div>
            ) : (
              <div />
            )}

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
                  To download the entire project, open a terminal, paste and run
                  the command below!
                </h3>
              </div>
              <div>
                <SyntaxHighlighter
                  language="shell"
                  style={nord}
                  showLineNumbers
                >
                  {`git clone --recurse-submodules -j8 ${repoLink}`}
                </SyntaxHighlighter>
              </div>
              <div>
                <h3 className="text-secondary text-xl">
                  Now navigate to the project folder and run the entire
                  project!🍾🥂🥳
                </h3>
              </div>
              <div>
                <SyntaxHighlighter
                  language="shell"
                  style={nord}
                  showLineNumbers
                >
                  {`cd ${projectName} && docker-compose up`}
                </SyntaxHighlighter>
              </div>
            </>
          ) : null}
        </>
      ) : null}
    </main>
  );
};

export default Home;
