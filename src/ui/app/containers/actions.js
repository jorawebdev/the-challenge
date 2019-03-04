/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

// TODO: Add more actions if needed
export function userFetchSucceeded(luckyNumber) {
  return {
    type: DISPATCH_ACTIONS.USER_FETCH_SUCCEEDED,
    luckyNumber
  };
}
export function getUser(user) {
  return {
    type: DISPATCH_ACTIONS.GET_USER,
    user
  };
}
export const sendDataFailure = (err) => ({
  type: DISPATCH_ACTIONS.SEND_DATA_FAILURE,
  payload: err,
  error: true,
});
