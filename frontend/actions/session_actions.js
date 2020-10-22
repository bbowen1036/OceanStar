import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (payload) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    payload
  })
};

export const logoutCurrentUser = () => {
  return ({
      type: LOGOUT_CURRENT_USER
  })
}; 

// errors is an Array
export const receiveErrors = (errors) => {
  return ({
      type: RECEIVE_ERRORS,
      errors 
  })
};

export const clearErrors = () => {
  return ({
    type: CLEAR_ERRORS
  })
}


export const createNewUser = (newUser) => dispatch => {
  return (
    // debugger
      APIUtil.signup(newUser)
          .then(payload => dispatch(receiveCurrentUser(payload)))
          .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

export const logoutUser = () => dispatch => {
  return (
      APIUtil.logout().then(loggedOutUser => dispatch(logoutCurrentUser()))
  )
};

export const loginUser = (user) => dispatch => {
  return (
      APIUtil.login(user)
          .then(payload => dispatch(receiveCurrentUser(payload)))
          .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
  )
};

