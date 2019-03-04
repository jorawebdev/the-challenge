/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
      // TODO: Set things in the Redux store
      return {
        ... state,
        userName: action.username
      }
    case DISPATCH_ACTIONS.GET_USER:
      return {
        ... state,
        user: action.user
      }
    case DISPATCH_ACTIONS.USER_FETCH_SUCCEEDED:
      return {
        ... state,
        luckyNumber: action.luckyNumber
      }
    case  DISPATCH_ACTIONS.SEND_DATA_FAILURE:
    return {
      ... state,
      payload: action.payload,
      error: action.error
    }
    default:
      return state;
  }
}

export default reducer;
