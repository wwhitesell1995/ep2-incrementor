import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';
import store from './store/';
import {Provider} from 'react-redux'

class App extends Component {
  render() {
    console.log(store)
    return (
      <Provider store={store}>
        <div className="App">
          <Counter />
        </div>
      </Provider>
    );
  }
}

export default App;
