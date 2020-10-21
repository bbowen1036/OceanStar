import * as CartItemAPIUtil from '../util/cart_items_api_util';

export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const REMOVE_ALL_CART_ITEMS = "REMOVE_ALL_CART_ITEMS";

export const removeAllItems = () => {
  return {
    type: REMOVE_ALL_CART_ITEMS
  }
};

export const receiveCartItem = (cartItem) => {
  return {
    type: RECEIVE_CART_ITEM,
    cartItem
  }
};

export const receiveCartItems = cartItems => {
  return {
    type: RECEIVE_CART_ITEMS,
    cartItems
  }
};

export const removeCartItem = (cartItemId, allCartItems) => {
  return {
    type: REMOVE_CART_ITEM,
    cartItemId,
    allCartItems
  }
};

export const getAllCartItems = () =>  dispatch => {
  return  (CartItemAPIUtil.getAllCartItems() 
       .then(cartItems => dispatch(receiveCartItems(cartItems))))
};

export const getCartItem = cartItemId => dispatch => {
  return  (CartItemAPIUtil.getCartItem(cartItemId)
       .then( cartItem => dispatch(receiveCartItem(cartItem))))
}

export const createCartItem = cartItem => dispatch => {
  return  (CartItemAPIUtil.createCartItem(cartItem) 
       .then(cartItem => dispatch(receiveCartItem(cartItem))))
}

export const deleteCartItem = cartItemId => dispatch => {
  return CartItemAPIUtil.deleteCartItem(cartItemId)
       .then (() => CartItemAPIUtil.getAllCartItems())
       .then( (allCartItems) => dispatch(removeCartItem(cartItemId, allCartItems)))
}

export const updateCartItem = (data, id) => dispatch => (
   CartItemAPIUtil.updateCartItem(data, id) 
       .then((cartItem) => dispatch(receiveCartItem(cartItem)))
)
