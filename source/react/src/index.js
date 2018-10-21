// @flow

// First include all the react
import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.scss';

// Include the main router
import Router from './routes/Router';

// $FlowFixMe Render the router
ReactDOM.render(<Router />, document.getElementById('root'));
