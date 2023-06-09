﻿import React from 'react';
import ReactDOM from 'react-dom';

import Store from './components/Store';

let storeArray = [ 
  {name:'Name', cost: 'Price', url: 'URL', quantity: 'Quantity', control: 'Control', id: 1}
];
let productsArray = require('./products.json');

ReactDOM.render(
    <Store store={storeArray} products={productsArray}></Store>,
  document.getElementById('container') 
);
