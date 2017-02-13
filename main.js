import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';
import SignIN from "./src/SignIN";
import SignUP from "./src/SignUP";



ReactDOM.render ((
  <Router history={hashHistory}>
    <Route path="/" component={SignIN} />
    <Route path="/registration" component={SignUP} />
  </Router>
), document.getElementById('root'));