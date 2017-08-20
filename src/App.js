import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Receipt from './components/Receipt';
import store from './state/store';
import { asyncFetchFruits } from './state/fruits/actions';
import { asyncFetchReceiptData } from './state/receipt/actions';

import './App.css';

/**
 * A simplified app that renders our stuff
 */
class App extends Component {
  componentDidMount() {
    // This is an action that forces the app to fetch receipt data
    store.dispatch(asyncFetchFruits());
    store.dispatch(asyncFetchReceiptData());
  }

  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Provider store={store}>
            <Receipt />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
