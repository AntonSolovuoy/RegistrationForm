import React from "react";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

import MainFrame from "./src/MainFrame"
import MainPage from "./src/MainPage"
import LogIN from "./src/LogIN";
import SignUP from "./src/SignUP";

ReactDOM.render ((
  <Router history={browserHistory}>
    <Route component={MainFrame} >
      <Route path="/" component={MainPage} />
    </Route>
    <Route>
      <Route path="/login" component={LogIN} />
      <Route path="/registration" component={SignUP} />
    </Route>
  </Router>
), document.getElementById('root'));