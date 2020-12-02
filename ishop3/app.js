"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IshopBlock from './components/IshopBlock';

let ishopName = 'IMarket';
let itemsArr = require('./items.json');

ReactDOM.render(
    <IshopBlock
        shopName={ishopName}
        items={itemsArr}
    />
    , document.getElementById('container')
);