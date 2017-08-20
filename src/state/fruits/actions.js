import * as types from './types';

import fruits from './fruits.json';

/**
 * Action Creators
 */
export const asyncFetchFruitsRequest = () => {
  return {
    type: types.ACYNC_FETCH_FRUITS_REQUEST
  };
};
export const asyncFetchFruitsSuccess = (data) => {
  return {
    type: types.ACYNC_FETCH_FRUITS_SUCCESS,
    data
  };
};
export const asyncFetchFruitsError = (error) => {
  return {
    type: types.ACYNC_FETCH_FRUITS_ERROR,
    error
  };
};
/**
 * This is a thunk fetch fruits
 */
export const asyncFetchFruits = () => {
  return (dispatch, getState) => {
    // We dispatch the request event with the orderId
    dispatch(asyncFetchFruitsRequest());

    // Instead of the following api call
    // fetch('api/url/here')
    //   .then((resp) => resp.json())
    //   .then(response => {
    //     dispatch(asyncFetchFruitsSuccess(data));
    //     resolve();
    //   })
    //   .catch((error) => { 
    //     dispatch(asyncFetchFruitsError(error));
    //     reject();
    //   }

    // We are importing data from json and we use a timeout to fake it
    setTimeout(() => {
      dispatch(asyncFetchFruitsSuccess(fruits));
    }, 1000);
  };
};
