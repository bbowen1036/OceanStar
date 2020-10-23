import React from 'react';
import { NavLink } from 'react-router-dom';

import {connect} from 'react-redux'
import Cart from '../shopping_cart/cart_container'



class ProductIndexItem extends React.Component {

  handleClick(product) {
    // console.log('Ive been clicked')
    // console.log(product)
    
    
  }

  render () {

    const { product } = this.props
    return (
      

      <div className="product-item">
        
        <li key={product.id}>
          <div className="product-item-info">

            <div className="product-image">
              <img src={product.photo_url} />
            </div>
            <div className='product-name'>

              <NavLink to={{ 
                pathname: '/fish',
                aboutProps:{ product }
              }} style={{ textDecoration: 'none', color: 'rgba(19, 18, 18, 0.849)', font: 'Avenir', fontSize: '14px'}}>
                <h3>{product.name}</h3>
              </NavLink>

            </div>
            <div className='product-price'>
              <h4>${product.price}</h4>
            </div>
            {/* <div> */}
              <button onClick={() => this.handleClick(product)} className="product-button">Add To Cart</button>
            {/* </div> */}
          </div>

        </li>
      </div>
    )
  }
}

export default ProductIndexItem;


