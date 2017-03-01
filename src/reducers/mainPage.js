const initialState = {


  amountSubscribers: 50,
  amountFollowers: 17,
  amountPhotos: 68
};

export default function mainPage(state = initialState, action) {

  switch (action.type) {
    case 'amountSubscribers' : {
      return { ...state, amountSubscribers: action.amountSubscribers };
    }

    case 'amountFollowers' : {
      return { ...state, amountFollowers: action.amountFollowers };
    }

    case 'amountPhotos' : {
      return { ...state, amountPhotos: action.amountPhotos };
    }
  }

  return state;
}
