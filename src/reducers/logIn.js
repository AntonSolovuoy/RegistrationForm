const initialState = {
  logInEMail: "",
  logInPassword: "",
  logInIsRemember: false,

  logInIsSuccess: false,
  logInIsFailed: false
};

export default function logIN(state = initialState, action) {

  switch (action.type) {
    case 'logInEMail' : {
      return { ...state, logInEMail: action.logInEMail };
    }

    case 'logInPassword' : {
      return { ...state, logInPassword: action.logInPassword };
    }

    case 'logInIsRemember' : {
      return { ...state, logInIsRemember: action.logInIsRemember };
    }

    case 'logInIsSuccess' : {
      return { ...state, logInIsSuccess: action.logInIsSuccess };
    }
    case 'logInIsFailed' : {
      return { ...state, logInIsFailed: action.logInIsFailed };
    }
  }

  return state;
}
