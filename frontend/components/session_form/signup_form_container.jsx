import { connect } from 'react-redux';
import { createNewUser, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';
import { Link } from 'react-router-dom';
import React from 'react';

const mSTP = ({errors}) => {
  return {
    errors: errors.sessionErrors,
    formType: 'signup',
    navLink: <Link to='/signup'>log in here</Link>
  }
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  }
};

export default connect(mSTP, mDTP)(SignupForm);