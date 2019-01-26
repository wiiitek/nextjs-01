import React from 'react';

import fetch from 'node-fetch';

const prefix = '[Cards]';

// Types
export const cardActionTypes = {
  SEARCH_REQUEST: `${prefix} Search Request`,
  SEARCH_SUCCESS: `${prefix} Search Success`,
  SEARCH_ERROR: `${prefix} Search Error`,
  SINGLE_CARD_REQUEST: `${prefix} Single Card Request`,
  SINGLE_CARD_SUCCESS: `${prefix} Single Card Success`,
  SINGLE_CARD_ERROR: `${prefix} Single Card Error`,
  RANDOM_CARD_REQUEST: `${prefix} Random Card Request`,
};

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

export const singleCardRequest = () => ({
  type: cardActionTypes.SINGLE_CARD_REQUEST,
});

export const singleCardSuccess = (result) => ({
  type: cardActionTypes.SINGLE_CARD_SUCCESS,
  // new syntax suger - instead of writing:
  // "result": result
  result,
});

export const singleCardError = () => ({
  type: cardActionTypes.SINGLE_CARD_ERROR,
});

// Fetching single card
export const fetchSingleCard = (cardId) => {
  return async (dispatch) => {
    dispatch(singleCardRequest)
    const res = await fetch(`https://api.scryfall.com/cards/${cardId}`);
    //const statusCode = res.status;
    const data = await res.json();
    return dispatch(
      singleCardSuccess(data || {})
    );
  }
}

export const RANDOM_CARD = 'r';

export const randomCardRequest = () => ({
  type: cardActionTypes.RANDOM_CARD_REQUEST,
});

// Get random card
export const fetchRandomCard = () => {
  return async (dispatch) => {
    dispatch(randomCardRequest)
    const res = await fetch(`https://api.scryfall.com/cards/random`);
    //const statusCode = res.status;
    const data = await res.json();
    return dispatch(
      singleCardSuccess(data || {})
    );
  }
}
