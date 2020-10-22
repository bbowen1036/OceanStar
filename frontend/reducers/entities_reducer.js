import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import cartItemsReducer from './cart_items_reducer';
import productsReducer from './product_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  cartItems: cartItemsReducer,
  products: productsReducer
});

export default entitiesReducer