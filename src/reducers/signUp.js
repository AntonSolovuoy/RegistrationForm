const initialState = {
  firstName: "",
  lastName: "",
  year: "",
  month: "",
  day: "",
  sex: "",
  eMail: "",
  password: "",

  isShowDate: false,
  isShowSex: false,

  isSuccess: false,
  isFailed: false
};

export default function signUP(state = initialState, action) {

  switch (action.type) {
    case 'firstName' : {
      return { ...state, firstName: action.firstName };
    }

    case 'lastName' : {
      return { ...state, lastName: action.lastName };
    }

    case 'year' : {
      return { ...state, year: action.year };
    }

    case 'month' : {
      return { ...state, month: action.month };
    }

    case 'day' : {
      return { ...state, day: action.day };
    }

    case 'sex' : {
      return { ...state, sex: action.sex };
    }

    case 'eMail' : {
      return { ...state, eMail: action.eMail };
    }

    case 'password' : {
      return { ...state, password: action.password };
    }

    case 'isShowDate' : {
      return { ...state, isShowDate: action.isShowDate };
    }

    case 'isShowSex' : {
      return { ...state, isShowSex: action.isShowSex };
    }

    case 'isSuccess' : {
      return { ...state, isSuccess: action.isSuccess };
    }

    case 'isFailed' : {
      return { ...state, isFailed: action.isFailed };
    }
  }

  return state;
}
