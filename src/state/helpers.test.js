import { calculateItemPrice } from './helpers';
import map from 'lodash/map';

import fruits from './fruits/fruits.json';

describe('Selectors', () => {
  it('must return the correct loading value', () => {
    const result = map(fruits.fruits, item => {
      return calculateItemPrice(item, 3);
    });
    expect(result).toEqual([0.75, 0.90, 0.45, 1]);
  });
});