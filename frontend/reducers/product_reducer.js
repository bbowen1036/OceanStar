import { 
  RECEIVE_ALL_PRODUCTS, 
  REMOVE_PRODUCT, 
  RECEIVE_PRODUCT
} from '../actions/product_actions';

const productsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_ALL_PRODUCTS:
      // return Object.values(action.products)
      return action.products
    case RECEIVE_PRODUCT:
      return Object.assign(newState, { [action.product.id]: action.product})
    case REMOVE_PRODUCT:
      // delete newState[action.product.id]
      delete newState[action.productId]
      return newState
    default:
      return oldState;
  }
};

export default productsReducer;