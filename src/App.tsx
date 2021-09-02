import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
