import { 
  REMOVE_ALL_CART_ITEMS, 
  RECEIVE_CART_ITEM, 
  RECEIVE_CART_ITEMS, 
  REMOVE_CART_ITEM, 
} from '../actions/cart_item_actions';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


const cartItemsReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CART_ITEM:
            newState[action.cartItem.id] = action.cartItem
            return newState
        case RECEIVE_CART_ITEMS:
            return action.cartItems
        case REMOVE_CART_ITEM:
            delete newState[action.id]
            return action.allCartItems
        case REMOVE_ALL_CART_ITEMS:
            return {}
        case RECEIVE_CURRENT_USER:
            return Object.assign(newState, action.payload.cartItems)
        default:
            return state
    }
};

export default cartItemsReducer;


