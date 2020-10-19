import React from 'react';
import ReactDOM from "react-dom";
//Components
import configureStore from './store/store';
import Root from './components/root';

//test//
import {login, logout, signup} from './util/session_api_util'
import {createNewUser, loginUser, logoutUser} from './actions/session_actions'


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);

  window.getState = store.getState;
  window.dispatch = store.dispatch; 

});