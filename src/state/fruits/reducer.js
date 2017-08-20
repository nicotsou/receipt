import { normalizeFruits } from './normalizer.js';
import * as types from './types';

export const initialState = {
  // Must be true while fetching fruits
  isLoading: true,
  // A collections of fruits by id
  byId: {},
  // An array that contain all fruit ids
  allIds: []
};

/**
 * Reducer
 */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ACYNC_FETCH_FRUITS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.ACYNC_FETCH_FRUITS_SUCCESS:
      return {
        ...state,
        ...normalizeFruits(action.data.fruits),
        isLoading: false
      }
    case types.ACYNC_FETCH_FRUITS_ERROR:
      return {
        ...state,
        isLoading: false
      }
    default: 
      return state;
  }
}