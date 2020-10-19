import { connect } from 'react-redux';

import {fetchAllProducts} from '../../actions/product_actions' 
import ProductsIndex from './products'


const mSTP = (state) => {
  return { 
    products: Object.values(state.products)
  }
};

const mDTP = dispatch => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  }
};

export default connect( mSTP, mDTP)(ProductsIndex);