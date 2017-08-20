import * as types from './types';
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
    //   .then(response => dispatch(asyncFetchReceiptDataSuccess(data)))
    //   .catch((error) => dispatch(asyncFetchReceiptDataError(error)));

    // We are importing data from json and we use a timeout to fake it
    setTimeout(() => {
      dispatch(asyncFetchReceiptDataSuccess(receipt));
    }, 1000);
  };
};