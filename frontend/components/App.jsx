import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashContainer from './splash/splash_container'
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Error from './error/error';
import Modal from './modal/modal';

import Navbar from './navbar/navbar';

import { 
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>

        <Route path='/error' component={Error} />
        <Route exact path="/" component={SplashContainer}/>
        <Route exact path="/login" component={LogInFormContainer} />
        <Route exact path="/signup" component={SignUpFormContainer} />
        <Redirect to="/error"/>
      </Switch>
      <Modal />
    </div>
  )
}; 

export default App; 