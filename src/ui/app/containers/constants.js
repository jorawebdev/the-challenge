/**
 * constants.js
 *
 * This file contains some constants used in the Redux infrastructure.
 * It facilitates the centralization of the key values.
 */

export const CONTAINER_KEY = 'code-challenge/welcome';

// TODO: Add more action constants if needed
export const DISPATCH_ACTIONS = {
  GET_LUCKY_NUMBER: `${CONTAINER_KEY}/GET_LUCKY_NUMBER`,
  USER_FETCH_SUCCEEDED: `${CONTAINER_KEY}/USER_FETCH_SUCCEEDED`,
  GET_USER: `${CONTAINER_KEY}/GET_USER`,
  SEND_DATA_FAILURE: `${CONTAINER_KEY}/SEND_DATA_FAILURE`
};
