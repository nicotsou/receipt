import { createSelector } from 'reselect';
import map from 'lodash/map';
import add from 'lodash/add';
import multiply from 'lodash/multiply';
import round from 'lodash/round';

import { calculateItemPrice } from './helpers';

const TAX = 0.0825;

const isFetchingFruitsSelector = state => state.fruits.isLoading;
const isFetchingReceiptSelector = state => state.receipt.isLoading;

const receiptItemsSelector = state => state.receipt.items;
const fruitsByIdSelector = state => state.fruits.byId;

/**
 * Get if we should display the receipt or not
 * Checks all loading variables and returns a boolean
 */
export const isAppLoading = createSelector(
  isFetchingFruitsSelector,
  isFetchingReceiptSelector,
  (isFetchingFruits, isFetchingReceipt) => {
    return isFetchingFruits || isFetchingReceipt;
  }
);

/**
 * Creates a collection with order items for the receipt
 */
export const getReceiptItems = createSelector(
  receiptItemsSelector,
  fruitsByIdSelector,
  isAppLoading,
  (receiptItems, fruitsById, isAppLoading) => {
    if (isAppLoading) return [];
    if (!receiptItems || receiptItems.length === 0) return [];
    if (!fruitsById || fruitsById.length === 0) return [];

    return map(receiptItems, item => {
      return {
        ...item,
        ...fruitsById[item.id],
        price: calculateItemPrice(fruitsById[item.id], item.quantity)
      }
    });
  }
);

/**
 * Counts all items and returns the sub total
 */
export const getSubTotal = createSelector(
  getReceiptItems,
  isAppLoading,
  (items, isAppLoading) => {
    if (isAppLoading) return 0;
    if (!items || items.length === 0) return 0;

    // @TODO Move functionality to helpers
    return map(items, item => item.price)
      .reduce((sum = 0, item) => {
        return add(sum, parseFloat(item));
      })
  }
);

/**
 * Get if we should display the receipt or not
 * Checks all loading variables and returns a boolean
 */
export const getTotal = createSelector(
  getSubTotal,
  isAppLoading,
  (subTotal, isAppLoading) => {
    if (isAppLoading) return 0;
    // @TODO Move functionality to helpers
    return round(add(subTotal, multiply(subTotal, TAX)), 2);
  }
);