import React from 'react';
import { NavLink } from 'react-router-dom';
import {ProductShowItem} from './product_show';

const ProductIndexItem = ({ product }) => {
  
  // const name1 = product.name
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
            }} >
              <h3>{product.name}</h3>
            </NavLink>

          </div>
          <div className='product-price'>
            <h4>{product.price}</h4>
          </div>
          {/* <div> */}
            <button className="product-button">Add To Cart</button>
          {/* </div> */}
        </div>

      </li>
    </div>
  )
}

export default ProductIndexItem;