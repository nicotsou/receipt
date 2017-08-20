import reducer, { initialState } from './reducer';
import * as types from './types';

import fruits from './fruits.json';

describe('Fruit Reducer', () => {
  it('Should return the initial state by default', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  
  it('handles ACYNC_FETCH_FRUITS_REQUEST', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_FRUITS_REQUEST,
      orderId: 'a'
    })).toEqual({
      ...initialState,
      isLoading: true
    });
  });

  it('handles ACYNC_FETCH_FRUITS_SUCCESS', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_FRUITS_SUCCESS,
      data: fruits
    })).toEqual({
      ...initialState,
      isLoading: false,
      byId: {
        apple: {
          id: 'apple',
          name: 'Apple',
          price: 0.25
        },
        orange: {
          id: 'orange',
          name: 'Orange',
          price: 0.30
        },
        bananna: {
          id: 'bananna',
          name: 'Bananna',
          price: 0.15
        },
        papaya: {
          id: 'papaya',
          name: 'Papaya',
          price: 0.50,
          discount: {
            amount: 1,
            minItems: 3
          }
        }
      },
      allIds: [
        'apple',
        'orange',
        'bananna',
        'papaya'
      ]
    });
  });

  it('handles ACYNC_FETCH_FRUITS_ERROR', () => {
    expect(reducer(initialState, { 
      type: types.ACYNC_FETCH_FRUITS_ERROR,
      error: 'An error response'
    })).toEqual({
      ...initialState,
      isLoading: false
    });
  });

});