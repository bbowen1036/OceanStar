import {connect} from 'react-redux';
// import React from 'react';
import { createNewUser, logoutUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  return {
    errors: errors.sessionErrors,
    formType: 'login'
  }
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(createNewUser(user)),
    clearErrors: user => dispatch(clearErrors(user))
  }
};

export default connect(mSTP, mDTP)(SessionForm);