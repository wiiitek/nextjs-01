import { cardActionTypes } from '../actions/cards';

const initialState = {
  results: [],
  details: {},
  errors: [],
  isFetchingSearch: false,
};

function cards (state = initialState, action) {
  switch (action.type) {
    case cardActionTypes.SEARCH_REQUEST: {
      // ... means that we are mergin objects
      return {
        ...state,
        isFetchingSearch: true,
      }
    }
    case cardActionTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        results: action.results,
        isFetchingSearch: false,
      }
    }
    case cardActionTypes.SEARCH_ERROR: {
      return {
        ...state,
        isFetchingSearch: false,
      }
    }
    default:
      return state;
  }
}

export default cards;
