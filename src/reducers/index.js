import { combineReducers } from 'redux';

import logIn from './logIn';
import signUp from './signUp';
import mainPage from './mainPage';

export default combineReducers({
  logIn,
  signUp,
  mainPage
});
