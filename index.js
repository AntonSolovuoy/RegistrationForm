import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import MainFrame from './src/MainFrame';
import MainPage from './src/MainPage';
import LogIn from './src/LogIn';
import SignUp from './src/SignUp';

import reducer from './src/reducers';

const container = document.getElementById('root');

const store = createStore(reducer);

render ((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={MainFrame}>
        <Route path="/" component={MainPage} />
      </Route>
      <Route>
        <Route path="/login" component={LogIn} />
        <Route path="/registration" component={SignUp} />
      </Route>
    </Router>
  </Provider>
), container);
