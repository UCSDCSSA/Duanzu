/**
 * @author: Liby Lee
 * @date: 2017/11/11
 * @description: The Main Router consists of all the routing
 */

// Import React Settings
import React from 'react';
import {Switch, Route} from 'react-router-dom';

// Import All Components
import Home from './Home.js';
import Login from './Login.js';
import NotFound from './NotFound.js';
import Publish from './Publish.js';
import ChangePassword from './ChangePassword.js';
import CheckInfo from './CheckInfo.js';
import ChangeProfile from './ChangeProfile.js';
<<<<<<< HEAD
import Register from './Register.js';
import About from './About.js';

//
const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/about' component={About} />
=======
import AboutUs from './AboutUs.js';

//
const Main = () => {
    return (<Switch>
        <Route exact="exact" path='/' component={Home}/>
        <Route exact="exact" path='/login' component={Login}/>
        <Route exact="exact" path='/register' component={Register}/>
        <Route exact="exact" path='/aboutus' component={AboutUs}/>
>>>>>>> 308e8f3f5a563f607c54c9959fad7680f579cbcc

        <Route exact="exact" path='/publish' component={Publish}/>
        <Route exact="exact" path='/checkInfo' component={CheckInfo}/>
        <Route exact="exact" path='/ChangeProfile' component={ChangeProfile}/>
        <Route exact="exact" path='/ChangePassword' component={ChangePassword}/>
        <Route path='*' component={NotFound}/>
    </Switch>);
};

export default Main;
