import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-center pt-10">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Homepage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
