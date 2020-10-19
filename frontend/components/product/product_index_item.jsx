import React from 'react';
import { NavLink } from 'react-router-dom';

const ProductIndexItem = ({ product }) => {
  return (
    <div className="product-item">
      <li key={product.id}>
        <div className="product-item-info">
          <div className="product-image">**Picture**</div>
          <NavLink to='/'>
            <h3>{product.name}</h3>
          </NavLink>
          <h4>{product.price}</h4>
          <button className="product-button">Add To Cart</button>
        </div>

      </li>
    </div>
  )
}

export default ProductIndexItem;