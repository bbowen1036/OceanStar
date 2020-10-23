import { connect } from 'react-redux';

import {fetchAllProducts} from '../../actions/product_actions' 
import ProductsIndex from './products'
import { getAllCartItems, createCartItem, getCartItem, deleteCartItem, updateCartItem } from '../../actions/cart_item_actions'


const mSTP = (state) => {
  return { 
    products: Object.values(state.entities.products)
  }
};

const mDTP = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    getAllCartItems: () => dispatch(getAllCartItems()),
    createCartItem: (cartItem) => dispatch(createCartItem(cartItem))
  }
};

export default connect( mSTP, mDTP)(ProductsIndex);