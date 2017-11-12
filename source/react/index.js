/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

// First include all the react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Include the main router
import Main from './components/Main.js';

// Render the router
ReactDOM.render((
    <BrowserRouter>
        <Main />
    </BrowserRouter>
), document.getElementById('root'));
