import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
const store = configureStore();
window.store = store;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h2>React is working!!</h2>,
    document.getElementById('root')
  );
});