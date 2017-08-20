import React, { Component } from 'react';

import Receipt from './components/Receipt';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Receipt />
        </div>
      </div>
    );
  }
}

export default App;
