import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Home';
import Docs from './pages/Docs';
import About from './pages/About';
import NavigationBar from './components/UI/NavigationBar/NavigationBar';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 text-center">
      <BrowserRouter>
        <NavigationBar />
        <div>
          <Switch>
            <Route path={'/docs'} component={Docs} />
            <Route path={'/about'} component={About} />
            <Route path={'/'} component={Homepage} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
