/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

// First include all the react
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

// Include the main router
import Main from './components/Main.js';

// Render the router
ReactDOM.render((
    <HashRouter>
        <Main />
    </HashRouter>
), document.getElementById('root'));
