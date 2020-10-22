import {RECEIVE_CURRENT_USER} from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState)
  // const defaultState = {};

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return Object.assign(newState, { [action.payload.user.id]: action.payload.user });
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
    default:
      return oldState;
  }
};

export default usersReducer;

