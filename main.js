import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import MainPage from "./src/MainPage"
import SignIN from "./src/SignIN";
import SignUP from "./src/SignUP";

ReactDOM.render ((
  <Router history={browserHistory}>
    <Route path="/">
      <IndexRoute component={MainPage} />
      <Route>
        <Route path="/login" component={SignIN} />
        <Route path="/registration" component={SignUP} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));