import { normalizeFruits } from './normalizer.js';

import fruits from './fruits.json';

const normalizedFruits = {
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

describe('Fruit Reducer Normalizer', () => {
  it('normalizes fruits data', () => {
    expect(normalizeFruits(fruits.fruits))
      .toEqual(normalizedFruits);
  });
});