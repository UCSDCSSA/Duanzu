// @flow

import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '~/components/Home';
import Login from '~/components/Login.js';
import NotFound from '~/components/NotFound.js';
import Publish from '~/components//Publish.js';
import ChangePassword from '~/components/ChangePassword.js';
import ViewLeasing from '~/components/ViewLeasing.js';
import ChangeProfile from '~/components/ChangeProfile.js';
import About from '~/components/About.js';
import SearchPage from '~/components/SearchPage.js';
import Display from '~/components/Display.js';
import GoogleMapTest from '~/components/GoogleMapTest.js';
import Sample from '~/components/PopUpSample.js';

export default class Router extends React.Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/display' component={Display}/>
          <Route exact path='/publish' component={Publish}/>
          <Route exact path='/leasing' component={ViewLeasing}/>
          <Route exact path='/profile/edit' component={ChangeProfile}/>
          <Route exact path='/profile/change_password' component={ChangePassword}/>
          <Route exact path='/searchpage' component={SearchPage}/>
          <Route exact path='/map' component={GoogleMapTest}/>
          <Route exact path='/sample' component={Sample}/>
          <Route path='*' component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
