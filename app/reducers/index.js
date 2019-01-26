import { combineReducers } from 'redux';

import cards from './cards';

const rootReducer = combineReducers({
  // new syntax suger - instead of writing:
  // "cards": cards
  cards,
});

export default rootReducer;
