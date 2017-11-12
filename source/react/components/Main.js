/**
 * @author: Liby Lee
 * @date: 2017/11/11
 * @description: The Main Router consists of all the routing
 */

// Import React Settings
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import All Components
import Home from './Home.js';
import Login from './Login.js';
import NotFound from './NotFound.js';

import Register from './Register.js';

//
const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            
            <Route exact path='/register' component={Register} />
            
            <Route path='*' component={NotFound} />
        </Switch>
    );
};

export default Main;
