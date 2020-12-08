"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import DoubleButton from './Fragment';
import { withRainbowFrame } from './withRainbowFrame';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = withRainbowFrame(colors)(DoubleButton);

ReactDOM.render(
    <div style={{ display: "inline-grid" }}>
        <DoubleButton caption1="однажды" caption2="пору" cbPressed={num => alert(num)}>
            в студёную зимнюю
        </DoubleButton>


        <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={num => alert(num)}>
            вышел, был сильный
        </FramedDoubleButton>
    </div>
    , document.getElementById('container')
);