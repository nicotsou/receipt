import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { default as fruitsReducer } from './fruits/reducer';
import { default as receiptReducer } from './receipt/reducer';

const reducer = combineReducers({
  fruits: fruitsReducer,
  receipt: receiptReducer
});

/**
 * Configure middlewares
 */
const showDevTools = typeof window !== 'undefined'
  ? (window.devToolsExtension && process.env.NODE_ENV !== 'production')
  : false;

/**
 * Redux Store - usually it will combine all the reducers
 */
const store = (createStore)(
  reducer,
  compose(
    applyMiddleware(thunk),
    showDevTools ? window.devToolsExtension() : f => f
  )
);

export default store;
