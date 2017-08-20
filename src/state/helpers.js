import add from 'lodash/add';
import multiply from 'lodash/multiply';
import round from 'lodash/round';
import divide from 'lodash/divide';

/**
 * Calculates the price of an item
 * 
 * @param {*} item - the object of the item
 * @param {*} quantity - the quantity
 */
export function calculateItemPrice(item, quantity) {
  const { price, discount } = item;
  let result = 0;

  // Calculates the prices of the items
  // @TODO Replace this with https://www.npmjs.com/package/money-math :)
  if (discount) {
    const reduced = parseInt(divide(quantity, discount.minItems), 10);
    const remaining = quantity % discount.minItems;

    result = multiply(parseFloat(discount.amount), parseFloat(reduced));
    result = add(result, multiply(parseFloat(price), parseFloat(remaining)));
  } else {
    result = multiply(parseFloat(price), parseFloat(quantity));
  }

  return round(result, 2);
}