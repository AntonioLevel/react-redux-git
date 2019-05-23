import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Results from './components/results/index.js';
import Details from './components/details/index.js';
import store from './store.js';



const Root = (
  <Provider store={ store }>
    <Router>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/details/:itemId" component={Details} />
        <Redirect from="/" to="/results" />
      </Switch>
    </Router>
  </Provider>
)

ReactDom.render(Root, document.getElementById('root'));
