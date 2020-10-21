import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import cartItemsReducer from './cart_items_reducer'
// import sessionReducer from './session_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  cartItems: cartItemsReducer
  // session: sessionReducer
});

export default entitiesReducer