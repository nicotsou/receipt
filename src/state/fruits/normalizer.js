import forEach from 'lodash/map';

/**
 * Normalizes fruits in order to be indexed
 * Returns an object with { byId, allIds }
 * Read more here: http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html
 * 
 * @param {array} fruits - A collection of fruits
 */
export function normalizeFruits(fruits) {
  let byId = {};
  let allIds = [];
  
  if (fruits && fruits.length > 0) {
    forEach(fruits, (fruit) => {
      byId[fruit.id] = fruit;
      allIds.push(fruit.id);
    })
  }

  return {
    byId,
    allIds
  };
}