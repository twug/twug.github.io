/**
 * Twug fiddle
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/twug/twug.github.io
 *
 * Released under the MIT license
 * https://github.com/twug/twug.github.io/raw/master/MIT-LICENSE.txt
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TwugFiddle from './js/src/Component/TwugFiddle';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/php/php';
import 'codemirror/mode/twig/twig';

import 'reset-css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'react-splitter-layout/lib/index.css';
import './css/fiddle.css';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <TwugFiddle />,
        document.getElementById('reactMountpoint')
    );
});
