import React from 'react';

import fetch from 'node-fetch';

const prefix = '[Cards]';

// Types
export const cardActionTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,
  SINGLE_CARD_REQUEST: `${prefix} Single Card Request`,
  // ...
};

// Actions
export const searchRequest = () => ({
  type: cardActionTypes.SEARCH_REQUEST,
});

export const searchSuccess = (results) => ({
  type: cardActionTypes.SEARCH_SUCCESS,
  // new syntax suger - instead of writing:
  // "results": results
  results,
});

export const searchError = () => ({
  type: cardActionTypes.SEARCH_ERROR,
});

export const singleCardRequest = () => ({
  type: cardActionTypes.SINGLE_CARD_REQUEST,
});

// Fetching cards
export const fetchSearch = (searchPhrase) => {
  // dispatch is provided by Thunk middleware
  return async (dispatch) => {
    // executes the action
    dispatch(searchRequest)
    const res = await fetch(`https://api.scryfall.com/cards/search?q=${searchPhrase}`);
    //const statusCode = res.status;
    const { data } = await res.json();
    return dispatch(
      searchSuccess(data || [])
    );
  };
}
