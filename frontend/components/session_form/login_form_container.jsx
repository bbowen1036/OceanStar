import {connect} from 'react-redux';
// import React from 'react';
import SessionForm from './session_form';
import { 
  createNewUser,
  logoutUser, 
  receiveErrors, 
  loginUser 
} from '../../actions/session_actions';

const mSTP = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: 'login'
  }
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(loginUser(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  }
};

export default connect(mSTP, mDTP)(SessionForm);