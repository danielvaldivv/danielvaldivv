import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Error404 from '../containers/Error404/Error404';
import Home from '../containers/Home/Home';

import './App.styl'

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  component={Error404}/>
      </Switch>
  </BrowserRouter>
)

export default App;