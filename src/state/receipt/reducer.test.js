import reducer, { initialState } from './reducer';
import * as types from './types';

import receipt from './receipt.json';

describe('Receipt Reducer', () => {
  it('Should return the initial state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  
  it('handles ACYNC_FETCH_RECEIPT_DATA_REQUEST', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_RECEIPT_DATA_REQUEST,
      orderId: 'a'
    })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('handles ACYNC_FETCH_RECEIPT_DATA_SUCCESS', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_RECEIPT_DATA_SUCCESS,
      data: receipt
    })).toEqual({
      ...initialState,
      isLoading: false,
      data: receipt
    });
  });

  it('handles ACYNC_FETCH_RECEIPT_DATA_ERROR', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_RECEIPT_DATA_ERROR,
      error: 'An error response'
    })).toEqual({
      ...initialState,
      isLoading: false
    });
  });

});