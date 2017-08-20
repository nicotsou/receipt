import * as types from './types';
import fruits from './fruits.json';
import receipt from './receipt.json';

/**
 * Action Creators
 */
export const asyncFetchReceiptDataRequest = (orderId) => {
  return {
    type: types.ACYNC_FETCH_RECEIPT_DATA_REQUEST,
    orderId
  };
};
export const asyncFetchReceiptDataSuccess = (data) => {
  return {
    type: types.ACYNC_FETCH_RECEIPT_DATA_SUCCESS,
    data
  };
};
export const asyncFetchReceiptDataError = (error) => {
  return {
    type: types.ACYNC_FETCH_RECEIPT_DATA_ERROR,
    error
  };
};
/**
 * This is a thunk to fetch receipt data
 * 
 * @param {string} orderId - The orderId
 */
export const asyncFetchReceiptData = (orderId = '') => {
  return (dispatch, getState) => {
    // We dispatch the request event with the orderId
    dispatch(asyncFetchReceiptDataRequest(orderId));

    // Instead of the following api call
    // fetch('api/url/here')
    //   .then((resp) => resp.json())
    //   .then(response => {
    //     dispatch(asyncFetchReceiptDataSuccess(data));
    //     resolve();
    //   })
    //   .catch((error) => { 
    //     dispatch(asyncFetchReceiptDataError(error));
    //     reject();
    //   }

    // We are importing data from json and we use a timeout to fake it
    setTimeout(() => {
      dispatch(asyncFetchReceiptDataSuccess(receipt));
    }, 2000);
  };
};

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

    // We are importing data from json and we use a timeout to fake it
    setTimeout(() => {
      dispatch(asyncFetchFruitsSuccess(fruits));
    }, 3000);
  };
};
