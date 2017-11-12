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
import Publish from './Publish.js';
import ChangePassword from './ChangePassword.js';
import Register from './Register.js';
import CheckInfo from './CheckInfo.js';
import ChangeProfile from './ChangeProfile.js';
//
const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/publish' component={Publish} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/checkInfo' component={CheckInfo} />
            <Route exact path='/ChangeProfile' component={ChangeProfile} />
            <Route exact path='/ChangePassword' component={ChangePassword} />
            <Route path='*' component={NotFound} />
        </Switch>
    );
};

export default Main;
