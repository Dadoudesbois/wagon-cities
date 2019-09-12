// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import citiesReducer from './reducers/cities-reducer.js';

// State and reducers
const reducers = combineReducers({
  changeMe: (state = null, action) => state,
  cities: citiesReducer
});

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);