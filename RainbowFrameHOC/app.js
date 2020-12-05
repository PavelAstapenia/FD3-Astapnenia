"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Fragment from './Fragment';
import { withRainbowFrame } from './withRainbowFrame';

let colors = ['red', 'orange', 'yellow', 'green', '#00BFFF', 'blue', 'purple'];
let FramedFragment = withRainbowFrame(colors)(Fragment);

ReactDOM.render(
    <FramedFragment>
        Hello!
    </FramedFragment>
    , document.getElementById('container')
);