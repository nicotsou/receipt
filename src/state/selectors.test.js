import { 
  isAppLoading,
  getReceiptItems,
  getSubTotal,
  getTotal
} from './selectors';

import receipt from './receipt/receipt.json';

const fruitsState = {
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
};

const receiptState = {
  isLoading: true,
  items: receipt.items,
  orderId: receipt.orderId
}

const state = {
  fruits: fruitsState,
  receipt: receiptState
}

describe('Selectors', () => {
  it('must return the correct loading value', () => {
    expect(isAppLoading(state)).toEqual(true);
  });

  it('must return the correct loading value', () => {
    expect(getReceiptItems(state)).toEqual([
      {
        id: 'apple',
        name: 'Apple',
        price: 0.50,
        quantity: 2
      },
      {
        id: 'orange',
        name: 'Orange',
        price: 0.90,
        quantity: 3
      },
      {
        id: 'bananna',
        name: 'Bananna',
        price: 0.60,
        quantity: 4
      },
      {
        id: 'papaya',
        name: 'Papaya',
        price: 2.5,
        quantity: 7,
        discount: {
          amount: 1,
          minItems: 3
        }
      }
    ]);
  });

  it('must return the sub total', () => {
    expect(getSubTotal(state)).toEqual(4.5);
  });

  it('must return the total', () => {
    expect(getTotal(state)).toEqual(4.87);
  });
});