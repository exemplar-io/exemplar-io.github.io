import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, useLocation } from "react-router-dom";

function App() {


    const Fun = () => {
        let query = new URLSearchParams(useLocation().search)
        console.log("this is the value: ", query.get('code'))

        return <></>
    }

  return (<div className="App">
      <BrowserRouter>
          <Switch>
              <Route
                  path={"/"}
                  component={() => {
                      return (
                          <>
                              <a
                                  className="App-link"
                                  href="https://github.com/login/oauth/authorize?client_id=d01fafaf5472594c537f&scope=repo">
                                  Authorize Github
                              </a>
                              <Fun/>
                          </>
                      )
                  }}>
              </Route>
          </Switch>
      </BrowserRouter>
  </div>)
}


export default App;

