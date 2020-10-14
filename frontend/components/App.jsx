import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { 
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

const App = () => {
  return (
    <div>
      {/* <header>
        <h1> OceanStar Seafood </h1>
      </header> */}

      <Route path="/" component={GreetingContainer}/>
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <Route path="/login" component={LogInFormContainer} />
    </div>
  )
}; 

export default App; 