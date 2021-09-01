import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import * as api from './api/api';

const Fun = () => {
  const [token, setToken] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const code = query.get('code');
  api.auth(code).then((token) => {
    api.createRepo('this_is_a_repo_name', token).then(() => setToken(token));
  });
  return <div>{{ token }}</div>;
};

function App() {
  console.log('does it hit?');
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path={'/'}
            component={() => {
              return (
                <>
                  <a href="https://github.com/login/oauth/authorize?client_id=d01fafaf5472594c537f&scope=repo">
                    Authorize Github
                  </a>
                  <Fun />
                </>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
