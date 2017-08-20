
import * as types from './types';

/**
 * The initial state
 */
export const initialState = {
  // This must be true while receiving receipt data
  isLoading: true,
  // The items of the order
  items: [],
  // The id of the order
  orderId: ''
};

/**
 * Reducer
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ACYNC_FETCH_RECEIPT_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.ACYNC_FETCH_RECEIPT_DATA_SUCCESS:
      return {
        ...state,
        items: action.data.items,
        orderId: action.data.orderId,
        isLoading: false
      }
    case types.ACYNC_FETCH_RECEIPT_DATA_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default: 
      return state;
  }
}