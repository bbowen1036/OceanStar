import React from 'react';

const ProductShowItem = (props ) => {
 
  
  return (

    <div className="show-container">
      <div><img src={props.location.aboutProps.product.photo_url} /></div>
      <div className='show-description'>
        <div className="show-product-meta">
          <h2>Ocean Star Seafood</h2>
          <h1>{props.location.aboutProps.product.name}</h1>
          <div className="show-price">${props.location.aboutProps.product.price}</div>
          <div><p className="show-description">{props.location.aboutProps.product.description}</p></div>
        </div>
        <div className="show-product-form">
          <label>Quantity:</label>
          <input type="number" min="1" max="100" placeholder="1"/>
          <button>ADD TO CART</button>
        </div>
      </div>
    </div>
  )

};

export default ProductShowItem;