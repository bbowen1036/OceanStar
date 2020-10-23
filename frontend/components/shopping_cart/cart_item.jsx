import React from 'react';

import {deleteCartItem, updateCartItem} from '../../actions/cart_item_actions'

class CartItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      itemCount: this.props.quantity,
      itemTotal: (this.props.quantity) * (this.props.product.price)
    }

    this.reduceItem = this.reduceItem.bind(this);
  }


  reduceItem(productId) {
    
  }

  update() {
  }


  render() {
    const { product } = this.props

    return (
      <div className='cart-content'>
        <div className="cart-product-group">
          <div className='cart-pic'>
            <img src={product.photoUrl} />
          </div>
          <div className='cart-product-name'>
            {product.name}
          </div>
        </div>
        <div className='cart-price'>
          <div className="cart-button-group">
            <button
              className="cart-buttonReduce"
              onClick={() => this.reduceItem(product.id)}
              >-
              </button>
            <div><input 
              className="quantityInput"
              type="number" 
              value={this.state.itemCount} min="1" max='50' 
              onChange={this.update(product.id)}/></div>
            <button>+</button>
          </div>
          <div>${this.state.itemTotal}</div>
        </div>
      
      </div>
    )
  }
}

export default CartItem;


