import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import coinReducer from './moneybox/duck';
import bagReducer from './Bag/duck';
import Market from './market/Container';
import Moneybox from './moneybox/Container';
import Bag from './Bag/Container';

const commonReducer = combineReducers({
  coinReducer,
  bagReducer
});

export const store = createStore(commonReducer, composeWithDevTools());

export function currentState() {
  store.subscribe(() =>
    console.log(store.getState())
  );
}

currentState();


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Moneybox />
          <Market />
          <Bag />
        </div>
      </Provider>
    );
  }
}

export default App;
