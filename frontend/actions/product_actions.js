import * as ProductUtil from '../util/product_api_util';

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const RECEIVE_ALL_PRODUCTS = 'RECEIVE_ALL_PRODUCTS';
export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT';

//test
export const START_LOADING_ALL_PRODUCTS = 'START_LOADING_ALL_PRODUCTS';

const receiveProduct = (product) => {
  return ({
    type: RECEIVE_PRODUCT,
    product
  })
};

const receiveAllProducts = (products) => {
  return ({
    type: RECEIVE_ALL_PRODUCTS,
    products
  })
};

const removeProduct = () => {
  return ({
    type: REMOVE_PRODUCT
  })
};

export const fetchAllProducts = () => dispatch => {
  return (
    ProductUtil.getAllProducts()
      .then(products => dispatch(receiveAllProducts(products)))
  )
};

export const fetchProduct = (product_id) => dispatch => {
  return (
    ProductUtil.getSingleProduct(product_id)
      .then(product => dispatch(receiveProduct(product)))
  )
};

export const deleteProduct = (product_id) => dispatch => {
  return (
    ProductUtil.removeProduct(product_id)
      .then((product) => dispatch(removeProduct(product)))
  )
};


//test
// export const requestAllProducts = () => dispatch => {
//   dispatch(startLoadingProducts());
//   return ProductUtil.getAllProducts()
//     .then(products => dispatch(receiveAllProducts(products)))
// }

// export default startLoadingProducts = () => {
//   return {
//     type: START_LOADING_ALL_PRODUCTS
//   }
// };
